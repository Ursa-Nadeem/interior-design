import React from 'react'
import Roll from 'react-reveal/Roll';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import living1 from "../Assets/living room/livingroom1.jpg";
import living2 from "../Assets/living room/livingroom2.jpg";
import living3 from "../Assets/living room/livingroom3.jpg";
import living4 from "../Assets/living room/livingroom4.jpg";
import living5 from "../Assets/living room/livingroom5.jpg";
import Bedrooms from './Bedrooms';
import Office from './Office'
import Footer from './Footer'
import Navbars from './Navbars';

const livingRooms = [
  {
    img: living1,
  },
  {
    img: living2,
  },
  {
    img: living3,
  },
  {
    img: living4,
  },
  {
    img: living5,
  }
];

const Portfolio = () => {
  return (
    <>
      <div className='mainPortfolio'>
      <Navbars/>
        {/* images */}


        <div className="portfolioText" id='portfolio'>
          <Roll left>
            <h1 style={{ color: '#FAB407', fontSize: '70px' }}>OUR PROJECTS</h1>
            <p style={{ fontSize: '20px' }}>We Have Solutions For All Your Space Related Issues!</p>
          </Roll>
        </div>
      </div>

      {/* Grid */}
      <div className='images-color' >
        <Box
          pl={{ sm: 10 }} pr={{ sm: 10 }}
          py={{ sm: 10 }}

        >
          <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}
            spacing={{ sm: 0 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} lg={3.5} md={4} sm={6}>
              <div className='livingRoom' >
                <h1>Living Room</h1>
                <p>It's the perfect space to be inspired. It's a place to explore. A place to imagine. A place to be creative. And it can be yours.</p>
              </div>
            </Grid>
            {livingRooms?.map((v, i) => {
              return (
                <Grid item xs={12} lg={3.5} md={4} sm={6}>
                  <img src={v?.img} style={{ width: '350px', height: '250px' }} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Bedrooms />
        <Office />
      </div>
      <Footer />
    </>


  )
}

export default Portfolio