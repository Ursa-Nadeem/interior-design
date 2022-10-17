import React from 'react'
import images from '../Assets/images.jpg';
import Fade from 'react-reveal/Fade';
import Text from './Text';
import AboutUs from './About Us';
import Services from './Services';
import Footer from './Footer';
import Concepts from './Concepts';
import Contact from './Contact';
import Navbars from './Navbars';

const Home = () => {
  return (
    <>
      <div className="mainContainer" id='home'>
        <Navbars/>
        <div className="imageContainer">
          <div className='headerText'>
            <Fade left>

              <h1 className='home-head'>Interior Design</h1>

              <p className='banner-para'>One of the reasons we became interior designers in the first place was because we love collecting and then putting it all together.
                But when you’re designing your own house, the hardest thing is to finish it, as you’re always adding your next favourite thing, and finally there’s no space left.</p>
              <button className='btn-banner'>Our Portfolio</button>
            </Fade>


          </div>
          <div className="imageHeader" >
            <Fade right>
              <img src={images} className="imgHeaderSmall" />
            </Fade>
          </div>
        </div>

      </div>
      <Text />
      <AboutUs />
      <Concepts />
      <Contact />
      <Footer />

    </>
  )
}

export default Home