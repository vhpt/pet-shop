import React, { useEffect, useState } from 'react';
import Header from '../User/components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async() => {
    const item = {email, password};
    console.log("item truyền vào", item);

    try {
      let response = await axios.post("http://localhost:8000/api/login", item);

      response = response.data;
      console.log("response", response);

      if(response.error){
        console.error(response.error);
      }

      else{
        localStorage.setItem('user-info', JSON.stringify(response));
        navigate('/home');
      }

    } catch (error) {
      console.error(error);
    }
    
  }

  useEffect(() => {
    if(localStorage.getItem('user-info')){
      navigate('/home')
    }
  }, [navigate]);

  
  return (
    <>
      <Header />
      <div className='loginPage col-sm-6 offset-sm-3'>
        <h1 className='text-center mt-3'>Login Page</h1>
        <label>Email</label>
        <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Password</label>
        <input type='password'  className='form-control' value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button className='btn btn-primary offset-sm-5 mt-5' onClick={handleLogin}>Login</button>
      </div>
    </>
  )
}

export default Login;
