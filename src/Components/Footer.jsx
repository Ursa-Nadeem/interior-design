import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ImLocation2 } from 'react-icons/im';
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image1 from "../Assets/f1.jpg";
import image2 from "../Assets/wood1.jpg";
import image8 from "../Assets/wallpic.jpg";
import image9 from "../Assets/glasspaper.jpg";
import image5 from "../Assets/upvcdoor.jpg";
import image6 from "../Assets/vinyl-flooring.jpg";
import {BsFacebook} from 'react-icons/bs'

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
        <p className='contact-para'><ImLocation2  size='1rem' color='#FAB407'/>Green nursery shahrah-e-faisal p.e.c.h.s Block-6</p>
        <p className='contact-para'><BsTelephoneFill  size='1rem' color='#FAB407'/>021-34382007</p>
        <p className='contact-para'><BsTelephoneFill  size='1rem' color='#FAB407'/>0333-2269011</p>
        <p className='contact-para'><BsTelephoneFill  size='1rem' color='#FAB407'/>0305-2833311</p>
        <p className='contact-para'><MdEmail  size='1rem' color='#FAB407'/>0305-2833311</p>
        </Col>

        <Col className='col3'>
         <h1 className='footer-heading2'>Social</h1>
         <div class="outer-grid" >
<div className="inner-grid">
<img src={image1} />
<img src={image9}/>

</div>
<div className="inner-grid">
<img src={image1} />
<img src={image1}/>

</div>
<div className="inner-grid">
<img src={image9} />
<img src={image9}/>

</div>

</div>

<span><BsFacebook color='blue' size='2rem' className='fbicon'/></span>
        </Col>
      </Row>
    </Container>
    </section>
     
        </>
    )
}

export default Footer