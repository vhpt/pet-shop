import React, { useEffect, useState, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ProductList = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeType, setActiveType] = useState(null); 

    const componentMounted = useRef(true);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("http://localhost:8000/api/products");

            if (componentMounted.current) {
                const result = await response.clone().json();
                setData(result);
                setFilter(result); 
                setLoading(false);
            }

            return () => {
                componentMounted.current = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
               <div className='col-md-3'>
                <Skeleton height={350} />
               </div>
            </>
        );
    };

    const filterProduct = (cate) => {
        const updateList = data.filter((x) => x.type === cate);
        setFilter(updateList);
        setActiveType(cate); 
    };

    const resetFilter = () => {
        setFilter(data);
        setActiveType(null); 
    };

    const ShowProducts = () => {
        return (
            <div className='mb-5 mt-5'>
                <div className='buttons mb-5 text-center'>
                    <button className='btn btn-outline-dark me-2' onClick={resetFilter} style={{ backgroundColor: activeType === null ? "black" : "", color: activeType === null ? "white" : "" }}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct(2)} style={{ backgroundColor: activeType === 2 ? "black" : "", color: activeType === 2 ? "white" : "" }}>Dog</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct(1)} style={{ backgroundColor: activeType === 1 ? "black" : "", color: activeType === 1 ? "white" : "" }}>Cat</button>
                    <button className='btn btn-outline-dark' onClick={() => filterProduct(9)} style={{ backgroundColor: activeType === 9 ? "black" : "", color: activeType === 9 ? "white" : "" }}>Other</button>
                </div>
                <br />

                
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                    {filter.map(product => (
                        <div key={product.id} className="col mb-5">
                            <div className="card" style={{ width: '260px', height: '435px' }}>
                                <img src={`http://localhost:8000/${product.image}`} className="card-img-top" alt={product.name} width={150} height={300} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <h5 className="card-title">${product.price}</h5>
                                    <NavLink className="btn btn-outline-dark" to={`/products/${product.id}`}>Go detail</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
            <Footer/>
        </>
    );
};

export default ProductList;
