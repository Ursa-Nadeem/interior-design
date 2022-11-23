import React from 'react'
import image1 from "../Assets/f1.jpg";
import image2 from "../Assets/wood1.jpg";
import image3 from '../Assets/image3.jpg';
import image4 from "../Assets/aluminium.jpg";
import image5 from "../Assets/upvcdoor.jpg";
import image6 from "../Assets/vinyl-flooring.jpg";
import image7 from "../Assets/wallpaper.jpg";
import image8 from "../Assets/wallpic.jpg";
import image9 from "../Assets/glasspaper.jpg";
import image10 from '../Assets/banner190.webp';
import image11 from '../Assets/wall texture/texture1.jpg';
import image12 from '../Assets/carpets/carpet2.webp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'antd';
import MultipleGridImages from 'react-multiple-image-grid'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Fade from 'react-reveal/Fade';

const AboutUs = () => {
 
  return (
    
    // <Container>
    <div className='About_Section'>
      <Row>
     
        <Col> 
        <Fade left>
        <img src={image10} className='pic'/>
        </Fade>
        </Col>
      
        <Col  className='about-img'>
        
        <Fade right>
         
        <h1 className='about-us'>About Us</h1>
        <h1 className='footer-heading'>Let’s design together</h1>
        <p className='about-para'>One of the reasons we became interior designers in the first place was because we love collecting and then putting it all together. 
          But when you’re designing your own house, the hardest thing is to finish it, as you’re always adding your next favourite thing, and finally there’s no space left.</p>
          <button className='btn2'>Our Portfolio</button>
          </Fade>
        </Col>
       
      </Row>

     
      </div>
   
  )
}

export default AboutUs