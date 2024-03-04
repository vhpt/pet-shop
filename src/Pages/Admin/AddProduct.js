import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import axios from 'axios';

function AddProduct() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const handleAdd = async () => {
    let item = {name, image, description, price, type};
    console.log("Đối tượng truyền vào hàm Add", item);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('type', type);


    try {
      let result = await axios.post("http://localhost:8000/api/products/add", formData);

      alert("Data has been saved!");
      result = result.data;
      console.log("result", result);
  
      resetForm();
    } catch (error) {
      console.error(error);
    }
  }

  const resetForm = () => {
    setName("");
    setImage("");
    setDescription("");
    setPrice("");
    setType("");

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
    <Header/>
    <div className='addProductPage col-sm-6 offset-sm-3'> 
      <h1 className='text-center mt-3 '>AddProduct</h1>
      <label>Name</label>
      <input type='text' className='form-control' value={name} onChange={(e)=> setName(e.target.value)}/>
      <label>Image</label>
      <input type='file' className='form-control' onChange={(e)=> setImage(e.target.files[0])}/>
      <label>Description</label>
      <input type='text' className='form-control' value={description} onChange={(e) => setDescription(e.target.value)}/>
      <label>Price</label>
      <input type='text' className='form-control' value={price} onChange={(e) => setPrice(e.target.value)}/>
      <label>Type</label>
      <select key={dataCategory.map(item => item.id)} className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
  {dataCategory.map(item => (
    <option key={item.id} value={item.id}>{item.id} ({item.name})</option>
  ))}
</select>

      <button className='btn btn-success offset-sm-5 mt-5' onClick={handleAdd}>Add</button>
    </div>
    </>
  )
}

export default AddProduct