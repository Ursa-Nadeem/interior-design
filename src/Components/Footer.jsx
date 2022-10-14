import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ImLocation2 } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BsFacebook } from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
// import Portfolio from './Components/Portfolio';
// import Contact from './Components/Contact';
import Services from './Services';

// const menufooter = [
//   {
//     text: 'Home',
//     link: '/'
//   },
//   {
//     text: 'Services',
//     link:"F:\Office\React\interior-design\src\Components\Services.jsx"
//   },
//   {
//     text: 'Portfolio',
//     link: '/portfolio'
//   },
//   {
//     text: 'Contact',
//     link: '/contact'
//   },
// ]
const Footer = () => {
  return (
    <>
      <section className='footer-section'>
        <Container>

          <Row>
            <Col className='col1'>

              <h1 className='footer-heading1'>Let’s design together</h1>
              {/* <hr className='footer-line'/> */}
              <p className='footer-para'>One of the reasons we became interior designers in the first place was because we love collecting and then putting it all together.
                But when you’re designing your own house, the hardest thing is to finish it, as you’re always adding your next favourite thing, and finally there’s no space left.</p>
              <button className='btn1'>Our Portfolio</button>

            </Col>

            <Col className='col2'>
              <h1 className='footer-heading2'>Contact</h1>
              <p className='contact-para'><span><ImLocation2 size='1rem' color='#F78537' /></span>51-Green nursery shahrah-e-faisal p.e.c.h.s Block-6</p>
              <p className='contact-para'><span><BsTelephoneFill size='1rem' color='#F78537' /></span>0333-2269011</p>
              <p className='contact-para'><span><BsTelephoneFill size='1rem' color='#F78537' /></span>0305-2833311</p>
              <p className='contact-para'><span><BsTelephoneFill size='1rem' color='#F78537' /></span>0305-2833311</p>
              <p className='contact-para'><span><MdEmail size='1rem' color='#F78537' /></span>viewerscollection@yahoo.com</p>
            </Col>

            <Col className='col3'>
              <div >
              <h1 className='footer-heading2'>Social</h1>
             
              <Box>
                <Grid  >
                  <Box >
                  <a href="/"className='social-menu' >Home</a>
                  </Box>
                 <Box>
                 <a href="/services" className='social-menu' >Services</a>
                 </Box>
                  <Box>
                  <a href="/portfolio" className='social-menu' >Portfolio</a> 
                  </Box>
                  <Box>
                  <a href="/contact" className='social-menu' >Contact</a> 
                  </Box>
                 
                  
                </Grid>
              </Box>
              <Box>
               <span style={{display:"flex"}}><BsFacebook color='F78537' size='2rem' className='fbicon' />
               <AiOutlineInstagram color='F78537' size='2rem' className='intaicon' /></span>
               </Box>
               </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Footer