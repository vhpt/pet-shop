import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateCategory = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    const [name, setName] = useState('');

    const updateCate = async (id) => {
      const formData = new FormData();
      formData.append('name', name);

     try {
      let result = await axios.post(`http://localhost:8000/api/categories/update/${id}?_method=PUT`, formData);
      result = result.data;
      
      console.log("result", result);
      alert("Data has been updated");

     } catch (error) {
      console.error(error);
     }

  }

    useEffect(() => {
        const getValue = async () => {
            try {
              let result = await axios(`http://localhost:8000/api/categories/${id}`);
              result =  result.data;
              setData(result);
              setName(result.name);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
    };
    getValue();
},[id]);

    return (
        <>
      <Header />
      <div className='updateProductPage col-sm-6 offset-sm-3'>
        <h1 className='text-center mt-3'>Cập nhật loại</h1>
        <label>Tên loại</label>
        <input type='text' className='form-control' onChange={(e) => setName(e.target.value)} defaultValue={data.name}/>
        <br/>
        <button className='btn btn-success offset-sm-5 mt-5' onClick={() => updateCate(data.id)}>Cập nhật</button>
      </div>
    </>
    );
};

export default UpdateCategory;