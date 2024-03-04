import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateProduct() {
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    type: '',
  });

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const getValue = async () => {
      try {
        const result = await fetch(`http://localhost:8000/api/products/${id}`);
        const resultData = await result.json();
        setDataProduct(resultData);
        setName(resultData.name);
        setImage(resultData.image);
        setDescription(resultData.description);
        setPrice(resultData.price);
        setType(resultData.type);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getValue();
  }, [dataProduct.description, dataProduct.image, dataProduct.name, dataProduct.price,dataProduct.type, id]);


  const handleUpdate = async (id) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('type', type);


    try {
      let result = await axios.post(`http://localhost:8000/api/products/update/${id}?_method=PUT`, formData);

      console.log("result after update", result);
      alert("Data has been updated");

    } catch (error) {
      console.log(error);
    }

  }

  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const getDatacatgory = async() => {
      try {
        let response = await axios.get("http://localhost:8000/api/categories");
        response = response.data;
        console.log("response", response);
        setDataCategory(response);

      } catch (error) {
        console.log(error);
      }
    };
    getDatacatgory();
  }, []);

  

  return (
    <>
      <Header />
      <div className='updateProductPage col-sm-6 offset-sm-3'>
        <h1 className='text-center mt-3'>Cập nhật sản phẩm</h1>
        <label>Name</label>
        <input type='text' className='form-control' defaultValue={dataProduct.name} onChange={(e) => setName(e.target.value)} />
        <label>Image</label>
        <input type='file' className='form-control' onChange={(e) => setImage(e.target.files[0])} />
        <img alt='img' style={{ width: '100px', height: '100px' }} src={"http://localhost:8000/" + dataProduct.image} />
        <br />

        <label>Description</label>
        <input type='text' className='form-control' defaultValue={dataProduct.description} onChange={(e) => setDescription(e.target.value)} />
        <label>Price</label>
        <input type='text' className='form-control' defaultValue={dataProduct.price} onChange={(e) => setPrice(e.target.value)} />

        <label>Type</label>

        <select key={dataCategory.map(item => item.id)} className="form-select" value={dataProduct.type} onChange={(e) => setType(e.target.value)}>
  {dataCategory.map(item => (
    <option key={item.id} value={item.id}>{item.id} ({item.name})</option>
  ))}
</select>



        <button className='btn btn-success offset-sm-5 mt-5' onClick={() => handleUpdate(dataProduct.id)}>Cập nhật</button>
      </div>
    </>
  );
}

export default UpdateProduct;
