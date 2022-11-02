import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import { ImLocation2 } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import Footer from './Footer'
import Roll from 'react-reveal/Roll';
import Navbar from './Navbar';
import Header from './Header';

import { Box } from '@mui/system'

const ContactUs = () => {
  return (
    <>
    <Header/>
      <Navbar/>
      <div className='mainPortfolio'>

        {/* images */}
        <div className="portfolioText" id='portfolio'>
          <Roll left>
            <h1 style={{ color: '#FE9C40', fontSize: '70px' }}>CONTACT US</h1>
            <hr className='contact-line' />
            <p style={{ fontSize: '20px' }}>ANSWER TO YOUR ALL QUESTIONS</p>
          </Roll>
        </div>
      </div>
      <Box
        px={{ xs: 3, sm: 2 }}
        py={{ xs: 3, sm: 5 }}
        className='ContactUs-class'
        color="#FE9C40"
      >
        <Container maxWidth="lg" className='contact-sec'>
          <Grid container spacing={20}>
            <Grid item xs={12} sm={12} md={4}>
              <Box>
                <ImLocation2 className='location-icons' />
                <p className='contact-text'>51-D, Green Nursery Shahrah-e-faisal p.e.c.h.s Block-6</p>
              </Box>

            </Grid>
            {/* contact us */}
            <Grid item xs={12} sm={12} md={4}>
              <Box>
                <MdEmail className='email-icons' />
                <p className='contact-text'>viewerscollection@yahoo.com</p>
              </Box>


            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box>
                <BsTelephoneFill className='phone-icons' />
                <p className='contact-text'>0305-2833311 | 0313-2489716 0333-2269011</p>
              </Box>

            </Grid>
          </Grid>
        </Container>
      </Box>
      <div >

        <iframe className="map-contact" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14480.086616935874!2d67.1025722!3d24.86311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7b0fd393feae985!2sViewers%20Collections!5e0!3m2!1sen!2s!4v1666757998430!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <Footer />
    </>

  )
}

export default ContactUs
