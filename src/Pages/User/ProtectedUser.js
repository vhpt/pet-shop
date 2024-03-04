import React , {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function ProtectedUser(props) {
    // component protected
    let Cmp = props.Cmp; 
    const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("user-info")){
      navigate("/login");
    }
    
  }, [navigate]);
  return (
    <div>
        <Cmp/>
    </div>
  )
}

export default ProtectedUser