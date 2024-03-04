import React from 'react'
import './Header.css'
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const state = useSelector((state) => state.handleCart);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to={""}>PetShop</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {
              localStorage.getItem("user-info") ?
              <>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/home"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/products"}>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>Contact</Link>
              </li>
            </ul>
          

            <div className='buttons'>
                    <Link className='btn btn-outline-dark ms-2' to={'/logout'}>
             <i className="fa fa-sign-in me-1" aria-hidden="true"></i> 
                    Logout</Link>

                    <Link className='btn btn-outline-dark ms-2' to={'/cart'}>
                    <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i>
                    Cart ({state.length})</Link>


            </div>
            </>
            :
            <>
                 <div className='buttons offset-md-9' style={{display: 'right'}}>
              <Link className='btn btn-outline-dark ' to={'/login'}>
              <i className="fa fa-sign-in me-1" aria-hidden="true"></i> 
                    Login</Link>

                    <Link className='btn btn-outline-dark ms-2' to={'/register'}>
              <i className="fa fa-user-plus me-1" aria-hidden="true"></i> 
                    Register</Link>

                  


            </div>
            </>
}
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Header