import React from 'react';
import logo from '../../../assets/footer.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{backgroundColor: 'beige', padding: '10px'}}>
        <div className='mt-5 mb-3' style={{display: 'flex'}}>
         
                <div className='offset-md-1 col-md-5' style={{display: 'flex'}}>
                    <img src={logo} alt='logo' className='imgFT'/>

                    <div className='p1 ms-5'>
                        <h5 className='text-uppercase'>
                        PET SHOP - Place to shop for pets
                        </h5>
                        <p><i class="bi bi-geo-alt-fill"></i> 123/321 PT Street</p>
                       <p>
                       <i class="bi bi-telephone-fill"></i> 0123456789
                       </p>
                       <p><i class="bi bi-envelope-fill"></i> petshop@gmail.com</p>
                    
                    <div className='row-icon'>
                    <i class="bi bi-facebook fs-3 me-2"></i>
                    <i class="bi bi-whatsapp fs-3 me-2"></i>
                    <i class="bi bi-twitter fs-3 me-2"></i>
                    <i class="bi bi-telegram fs-3 me-2"></i>
                    </div>
                    </div>
                </div>
                <div className='offset-md-1 col-md-4'>
                    <h5 className='text-uppercase'>order & deliver</h5>
                    <h5 className='text-uppercase'>Register get email</h5>
                   <div className='row' style={{display:'flex'}}>
                   <input className='form-control' type='email' placeholder='input email' style={{width: '400px'}}/>
                    <button className='btn btn-warning col-2 p-1 mx-2'>Submit</button>
                   </div>
                </div>

           
            <br/>
        </div>

        <div className='text-center p-2' >     
            &#169;  Coppyright 2024 by PetShop | Design by PetShop Heyhey
            </div>
        </div>
    );
};

export default Footer;