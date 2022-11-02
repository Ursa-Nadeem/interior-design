import React, { useState } from 'react'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Viewerescollection from '../Assets/logo/ViewersCollection.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMediaIcons, setshowMediaIcons] = useState(false);
  return (
    <>
      <nav className='main-nav'>
        {/* Logo */}
        <div className='mylogo'>
          <img src={Viewerescollection} className='logoChk' />
          {/* <h2>Logo</h2> */}
        </div>

        {/* Menu */}
        <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
          <ul>
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
        </div>

        {/* ICons */}
        <div className='social-media'>
          <ul className='social-media-desktop'>
            <li>
              <Link to='#' target='_viewers'><FaFacebookSquare className='facebook' /></Link>
            </li>
            <li>
              <Link to='#' target='_viewers'><FaInstagram className='instagram' /></Link>
            </li>
          </ul>
          {/* hamburger menu */}
          <div className='hamburger-menu'>
            <Link to='#' onClick={(() => {
              setshowMediaIcons(!showMediaIcons)
            })}>
              <GiHamburgerMenu />
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar