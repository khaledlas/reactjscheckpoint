import React from 'react';
import './Footer.css'


const Footer = () => {
  return <div>
      <footer className='footer-style'>
        <p style={{color:"black", fontSize:"60"}}>© 2022 GOMYCODE. Ce site est protégé par les lois divines</p>
        <img src="/images/khaled_cartoon.png" alt='avatar' style={{width:"50px"}}/>        
    </footer>
  </div>;
};

export default Footer;
