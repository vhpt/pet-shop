import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedAdmin(props) {
  // component protected
  let Cmp = props.Cmp; 
  const navigate = useNavigate();

  const adminInfoString = localStorage.getItem("user-info");
  const adminInfo = JSON.parse(adminInfoString);

  console.log("admin info", adminInfo);
  
  const emailAdmin = 'vhpt@gmail.com';
  
  useEffect(() => {
    if(adminInfo && adminInfo.email !== emailAdmin){
      navigate("/home");
      console.log("you're not admin. Go out!")
      console.log("thao test", adminInfo.email);
    }
  }, [adminInfo, emailAdmin, navigate]);

  return (
    <div>
        <Cmp/>
    </div>
  )
}

export default ProtectedAdmin;
