import React from 'react'
import { ImLocation2 } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import Fade from 'react-reveal/Fade';
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <div className="mainConcept-contact" id='contact'>
        <div className="leftConcept">
          <Fade left><iframe  className='contact-map'  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14480.086616935874!2d67.1025722!3d24.86311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7b0fd393feae985!2sViewers%20Collections!5e0!3m2!1sen!2s!4v1666757998430!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14480.086616935874!2d67.1025722!3d24.86311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7b0fd393feae985!2sViewers%20Collections!5e0!3m2!1sen!2s!4v1666757998430!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </Fade>
        </div>

        {/* Contact Info */}
        <div className="rightConcept1">
          <div style={{ marginTop: '50px' }}>
            <Fade right>
              <h1 style={{ fontSize: '50px' }}>Contact Us</h1>
              <p>Feel free to contact us with a project proposal</p>
              <p style={{ color: '#000000', fontSize: '20px' }} className='contact-para1'><ImLocation2 className='contact-icons' />51-D, Green Nursery Shahrah-e-faisal p.e.c.h.s Block-6</p>
              <p style={{ color: '#000000', fontSize: '20px' }} className='contact-para1'><BsTelephoneFill className='contact-icons' />0333-2269011</p>
              <p style={{ color: '#000000', fontSize: '20px' }} className='contact-para1'><BsTelephoneFill className='contact-icons' />0313-2489716</p>
              <p style={{ color: '#000000', fontSize: '20px' }} className='contact-para11'><BsTelephoneFill className='contact-icons' />0305-2833311</p>
              <p style={{ color: '#000000', fontSize: '20px' }} className='contact-para1'><MdEmail className='contact-icons' />viewerscollection@yahoo.com</p>
            </Fade>

          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Contact