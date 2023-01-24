import React from 'react';
import './header.scss';
import logo from '../../../assets/images/logo.svg';
import Navbar from '../navBar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header shadow-sm py-2">
      <div className='container'>  
        <div className='row align-items-center'>
         <div className='col-sm-3'>   
            <div className='logo'>
              <Link to="">
              <img src={logo} className="App-logo" alt="logo" height={"30"} />
              </Link>  
            </div>
         </div>

         <div className='col-sm-9'>
            <Navbar />
         </div>
        </div>
      </div>
    </header>
    );
}

export default Header;

