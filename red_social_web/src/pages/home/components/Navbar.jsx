import * as React from 'react';

import logo from '../assets/logo.png';
import '../styles/navbar.css';
const pages  = ['¿Quienes somos?', 'Inicio', 'Registrarse'];




const Navbar = () => {


  return (
    <div className='navbar'>
      <div className='logoBox'>
        <img src={logo} alt='logo' className='logo'/>
        <p className='logo-text'>Verifact</p>
      </div>
      <div className='links'>
        <ul className='pages-navbar'>
          {pages.map((page) => {
            return <a><li key={page}>{page}</li></a>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar