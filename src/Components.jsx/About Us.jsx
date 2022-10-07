import React from 'react'
import image3 from '../Assets/image3.jpg';

const AboutUs = () => {
  return (
    <div className='About_Section'>
        <div className='img_Section'>
        <img src={image3} className='pic'/>
        </div>
        <div className='text_img'>
           <h1>WHAT WE DO</h1>
           <p></p>
        </div>
    </div>
  )
}

export default AboutUs