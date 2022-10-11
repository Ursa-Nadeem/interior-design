import React from 'react'
import {ImLocation2 } from 'react-icons/im';
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <div className="mainConcept-contact">
        <div className="leftConcept">
          
          <iframe   className="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4998604967614!2d67.06164031447801!3d24.880925850565735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eec7bb2fab1%3A0x4ce0cfd843c195cc!2sAlKhaleej%20Clinics%20-%20Best%20Hair%20Transplant%20%26%20Skin%20Specialist%20in%20Karachi!5e0!3m2!1sen!2s!4v1665473250816!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* Contact Info */}
        <div className="rightConcept1">
          <div style={{marginTop:'50px'}}>
          <h1 style={{fontSize:'50px'}}>Contact Us</h1>
          <p style={{color:'#000000' , fontSize:'20px'}} className='contact-para1'><ImLocation2  size='1.5rem' color='#FAB407'/>51-D Green Nursery Shahrah-e-faisal p.e.c.h.s Block-6</p>
        <p style={{color:'#000000', fontSize:'20px'}} className='contact-para1'><BsTelephoneFill  size='1.5rem' color='#FAB407'/>0333-2269011</p>
        <p style={{color:'#000000', fontSize:'20px'}} className='contact-para1'><BsTelephoneFill  size='1.5rem' color='#FAB407'/>0305-2833311</p>
        <p style={{color:'#000000', fontSize:'20px'}} className='contact-para11'><BsTelephoneFill  size='1.5rem' color='#FAB407'/>0305-2833311</p>
        <p style={{color:'#000000', fontSize:'20px'}} className='contact-para1'><MdEmail  size='1.5rem' color='#FAB407'/>viewerscollection@yahoo.com</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Contact