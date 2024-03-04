import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../User/components/Header'
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () => {
    const item = { name, email, password };
    console.log("item truyền vào object", item);

    try {
      let response = await axios.post("http://localhost:8000/api/register", item);
      response = response.data;

      console.log("response", response);
      localStorage.setItem("user-info", JSON.stringify(response));
      navigate('/home');
    } catch (error) {
      console.error(error);
    }


  }

  return (
    <>
      <Header />
      <div className='registerPage col-sm-6 offset-sm-3'>

        <h1 className='text-center mt-3'>Register page</h1>

        <label>Name</label>
        <input className='form-control' type='text' value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email</label>
        <input className='form-control' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input className='form-control' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className='btn btn-primary offset-sm-5 mt-5' onClick={handleRegister} >Register</button>
      </div>
    </>
  )
}

export default Register