import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCategory()
  }, []);


  const handleDelete = async (id) => {
    try {
      let response = await axios.delete(`http://localhost:8000/api/categories/delete/${id}`);
      response = response.data;
      console.log("response delete", response);
      getCategory();
    } catch (error) {
      console.error(error);
    }
  }

  const getCategory = async() => {
    try {
      let response = await axios.get("http://localhost:8000/api/categories");
      response = response.data;

      setData(response);
      console.log("response", response);
    } catch (error) {
      console.error(error);
    }
  };
  
    return (
        <>
        <Header/>
        <div className='listProductPage col-sm-6 offset-sm-3'>
            <h1 className='text-center mt-3 mb-5'>List category</h1>
            <Link className='btn btn-outline-success mb-5' to={'/admin/categories/add'}>+ Add</Link>
    
            <Table striped bordered hover >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item)=> 
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
               
                <td>
                <Link to={`/admin/categories/update/${item.id}`} className='btn btn-warning mx-1'>
             Update
                </Link>
                  <button className='btn btn-danger mx-1' onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            )}
          
          </tbody>
        </Table>
        </div>
        </>
    );
};

export default ListCategory;
