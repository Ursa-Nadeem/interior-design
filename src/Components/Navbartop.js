import React,{useState} from 'react'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {FaTimes} from "react-icons/fa";
import Viewerescollection from '../Assets/logo/ViewersCollection.png';
import { Link } from 'react-router-dom';
import './Navbartop.css';


const Navbartop = () => {
  const[click, setClick]= useState(false);
  const handleClick =()=>setClick(!click);
  return (
    <div className='header'>
    {/* Logo */}
    {/* <div className='mylogo'>
      <img src={Viewerescollection} className='logoChk' />
  
    </div> */}
    <Link to='/'><img src={Viewerescollection} style={{width:'100%', height:'200px',marginLeft:'40px'}} className="logo" /></Link>

    {/* Menu */}
   
      <ul className={click ? "nav-menu active" : "nav-menu"} >
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/contactus'>Contact Us</Link>
        </li>
      </ul>
      <div className='social-media'>
          <ul className='social-media-desktop'>
            <li>
              <a href='https://www.facebook.com/profile.php?id=100057474128614' target='_viewers'><FaFacebookSquare className='facebook' /></a>
            </li>
            <li>
              <Link to='#' target='_viewers'><FaInstagram className='instagram' /></Link>
            </li>
          </ul>
          </div>
      <div className='hamburger' onClick={handleClick} >
      {click ? (
        <FaTimes size={20} style={{color:'#FFF'}}/>
      ) : (
        <GiHamburgerMenu size={20} style={{color:'#FFF'}}/>
      )}
      
      </div>
    
    </div>
    

  )
}

export default Navbartop