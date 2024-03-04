import React, {useState} from 'react'
import Header from './components/Header'
import {Table} from 'react-bootstrap'
import axios from 'axios';

function SearchProduct() {
    const [data, setData] = useState([]);

   
    const getValueSearch = async(key) => {
        if(key.length > 1){
            let result = await axios.get(`http://localhost:8000/api/products/search/${key}`);

            result = result.data;
            console.log("result search", result);
            setData(result);
        }


       
    };
     

  return (
    <>
    <Header/>
    <div className='searchProductPage col-sm-6 offset-sm-3'>
        <h1 className='text-center mt-3 mb-5'>SearchProduct</h1>
        <input type='text' onChange={(e) => getValueSearch(e.target.value)} className='form-control mb-5'/>
        {
            data.length > 0 ?
              <Table striped bordered hover >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Price</th>
                 
        
                </tr>
              </thead>
              <tbody>
                {data.map((item)=> 
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><img alt='img' style={{width: '100px', height: '100px'}} src={"http://localhost:8000/"+item.image} /></td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                  
                  </tr>
                )}
              
              </tbody>
            </Table>
            : <h2> Search product</h2>
        }
    </div>
    </>
  )
}

export default SearchProduct