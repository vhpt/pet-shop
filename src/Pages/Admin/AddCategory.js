import React, {useState} from 'react'
import Header from './components/Header'

function AddCategory() {
  const [name, setName] = useState("");

  const handleAdd = async () => {
    let item = {name};
    console.log("Đối tượng truyền vào hàm Add", item);

    const formData = new FormData();
    formData.append('name', name);

    let result = await fetch("http://localhost:8000/api/categories/add", {
      method: "POST",
      body: formData,
    });

    alert("Data has been saved!");
    result = await result.json();
    console.log("result", result);

    resetForm();
  }

  const resetForm = () => {
    setName("");
  }

  return (
    <>
    <Header/>
    <div className='addProductPage col-sm-6 offset-sm-3'> 
      <h1 className='text-center mt-3 '>AddCategory</h1>
      <label>Name</label>
      <input type='text' className='form-control' value={name} onChange={(e)=> setName(e.target.value)}/>
      <button className='btn btn-success offset-sm-5 mt-5' onClick={handleAdd}>Add</button>
    </div>
    </>
  )
}

export default AddCategory