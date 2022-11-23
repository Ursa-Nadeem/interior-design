import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlaceIcon from '@mui/icons-material/Place';
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BusinessIcon from "@mui/icons-material/Business";

// import Portfolio from './Components/Portfolio';
// import Contact from './Components/Contact';
import Services from './Services';



const footerMenuLink = [
  {
    text: "Home",
    link: "/"
  },
  {
    text: "Services",
    link: "/services"
  },
  {
    text: "Portfolio",
    link: "/portfolio"
  },
  {
    text: "Contact Us",
    link: "/contactus"
  },
]
const footerContact = [

  {

    icon: <PlaceIcon />,
    text: "51-Green nursery shahrah-e-faisal p.e.c.h.s Block-6",
  },
  {

    icon: <MailOutlineIcon />,
    text: "viewerscollection@yahoo.com",
  },
  {
    icon: <PhoneIcon />,
    text: "0333-2269011"
  },
  {
    icon: <PhoneIcon />,
    text: "0305-2833311"
  },
  {
    icon: <PhoneIcon />,
    text: "0313-2489716"
  },


]
const Footer = () => {
  return (
    <>
      {/* <section className='footer-section'> */}

      <Box
        px={{ xs: 3, sm: 30 }}
        py={{ xs: 3, sm: 5 }}
        className='footer-class'
        color="white"
      >
        <Container maxWidth="lg" className='footer-section'>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={3} lg={3} >
              <Box>
                <h2 className="Heading">Features</h2>
              </Box>
              {footerMenuLink.map((v, i) => {
                return (
                  <Box>
                    <a href={v?.link} className="linkText">{v?.text}</a>
                   

                  </Box>
                );
              })}
            </Grid>
            {/* contact us */}
            <Grid item xs={12} sm={6} md={6} lg={6} >
              <Box>
                <h2 className="Heading">Contact Us</h2>
              </Box>
              {footerContact?.map((v, i) => {
                return (
                  <>
                    <Box>
                      <span className="text_contactus" >
                        {v?.icon}
                        {v?.text}
                      </span>
                    </Box>

                  </>
                );
              })}

            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} >
              <Box>
                <h2 className="Heading">Socials</h2>
                <span style={{ display: "flex" }}><a href='https://www.facebook.com/profile.php?id=100057474128614'><FacebookIcon color='#fff' size='2rem' className='fbicon' /></a>
                  <InstagramIcon color='#fff' size='2rem' className='instaicon' /></span>
              </Box>

            </Grid>
          </Grid>
        </Container>
      </Box>
      <div className="footerCopyright">
        <hr />
        <div className="space"></div>
        <div className="textFooterCopyrightdiv">
          &copy; Copyright {new Date().getFullYear()}  - <span className="textFooterCopyright"

          > Powered By  ViewersCollections</span>
        </div>

      </div>

      {/* </section> */}

    </>
  )
}

export default Footer