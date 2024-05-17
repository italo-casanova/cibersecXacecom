import React from 'react'
import '../styles/homepage.css'
import Container from '@mui/material/Container';
import homeImage from '../assets/home-image.svg';
const HomePage = () => {
  return (
    <div className='homepage' style={{width: '100%'}}>
        
        <div className='box-text'>
            <h2 className="text-home">
            Noticias verificadas en la blockchain 
            <br/>
            Veracidad en la palma de tu mano
            <br/>
                Ve al punto
            </h2>
            <p className='home-description'>

            </p>
            <a className='link-noticias' style={{color:'#fff', textDecoration: 'line'}}>
                Ir a noticias
            </a>
        </div>
        <div className='image-home'>
            <img src={homeImage} alt='homeImage' className='home-image'/>
        </div>
    
    </div>
    
  )
}

export default HomePage