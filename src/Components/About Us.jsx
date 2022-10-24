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
import image10 from '../Assets/combine2.png';
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
  const itemData = [
    {
      img: image3,
      title: 'Windowblind',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: image1,
      title: 'FalseCeiling',
     
    },
    {
      img: image2,
      title: 'Woodflooring',
      
    },
    {
      img: image4,
      title: 'Aluminium',
      
    },
   
    {
      img: image5,
      title: 'Upvc Door',
      
    },
   
    {
      img: image6,
      title: 'Vinyleflooring',
      
    },
    
    {
      img: image7,
      title: 'Wallpaper',
      
    },
    {
      img: image8,
      title: 'Wallpic',
      
    },
    {
      img: image11,
      title: 'Walltexture',
      
    },
    {
      img: image12,
      title: 'Carpets',
      
    },    {
        img: image9,
        title: 'Glasspaper',  
      },
   
  ];
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
        <h1 className='about-us'>WHAT WE DO</h1>
        <h1 className='footer-heading'>Let’s design together</h1>
        <p className='about-para'>One of the reasons we became interior designers in the first place was because we love collecting and then putting it all together. 
          But when you’re designing your own house, the hardest thing is to finish it, as you’re always adding your next favourite thing, and finally there’s no space left.</p>
          <button className='btn2'>Our Portfolio</button>
          </Fade>
        </Col>
       
      </Row>

      {/* second */}
      <Row className='background-color'> 
        
        <Col className='portfolio-text'>
          
        <h1 className='service-us'>OUR SERVICES</h1>
        <div className="bar"></div>
        <Fade left>
        <p className='about-para-service'>We can provide different services of our clients.we can help designing with new spaces or renovating old ones.
        we also provide advice on how to furnish and decorate the home or office.</p>
       
       
         <a href='/services'><button className='btn3'>Our Services</button></a> 
          </Fade>
        </Col>

        <Col className='portfolio-grid'> 
        <Fade Right>
        <ImageList className="portfolioGridImage"
       
        >
      <ImageListItem key="Subheader" cols={2}>
       
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>

    </Fade>
        </Col>
      </Row>
      </div>
   
  )
}

export default AboutUs