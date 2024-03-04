import React, {useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import {useParams} from 'react-router'
import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/action';
import "./ProductDetail.css"

const ProductDetail = () => {

    const {id} = useParams();

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:8000/api/products/${id}`);

            const result = await response.json();
            setProduct(result);
            setLoading(false);
        };
        getProduct();
    }, [id]);

    const Loading = () => {
        return(
            <>
            <div className='col-md-3'>
            <Skeleton height={400}/>
            </div>
            <div className='col-md-6'>
            <Skeleton height={50} width={300}/>
            <Skeleton height={25} width={150}/>
            <Skeleton height={50}/>
            <Skeleton height={150} width={150}/>

            </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <div className='container row mb-5' >
    
                    <img src={`http://localhost:8000/${product.image}`} alt={product.name} height={300} width={200} className=' col-md-5'/>  

                <div className='col-md-7'>
                    <h4 className='text-uppercase'>{product.name}</h4>
                    <h3 className='my-4'>${product.price}</h3>

                    <h5>Description</h5>
                    <p>{product.description}</p>
                    <button className='btn btn-outline-dark me-2 py-2' onClick={() => addProduct(product)}>Add to cart</button>
                    <NavLink className='btn btn-dark py-2' to={'/cart'}>Go to cart</NavLink>

                </div>
            </div>
        );
    }

    return (
        <div>
        <Navbar/>
            <div className='container py-5'>
                <div className="row">
                    {loading ? <Loading/> : <ShowProduct/>}: 
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;