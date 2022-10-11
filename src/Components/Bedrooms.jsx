import React from 'react'
import Roll from 'react-reveal/Roll';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import bedroom1 from '../Assets/bedrooms/bedroom1.webp';
import bedroom2 from '../Assets/bedrooms/bedroom2.jpg';
import bedroom3 from '../Assets/bedrooms/bedroom3.jpg';
import bedroom4 from '../Assets/bedrooms/bedroom4.jpg';
import bedroom5 from '../Assets/bedrooms/bedroom5.webp';


const bedRooms = [
    {
        img: bedroom1,
    },
    {
        img: bedroom2,
    },
    {
        img: bedroom3,
    },
    {
        img: bedroom4,
    },
    {
        img: bedroom5,
    }
]

const Bedrooms = () => {
  return (
    <>

    {/* Grid */}
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
        <Grid item xs={6} lg={3.5} md={4} sm={6}>
          <div className='livingRoom' >
            <h1>Bed Room</h1>
            <p>It's the perfect space to be inspired. It's a place to explore. A place to imagine. A place to be creative. And it can be yours.</p>
          </div>
        </Grid>
        {bedRooms?.map((v, i) => {
          return (
            <Grid item xs={6} lg={3.5} md={4} sm={6}>
              <img src={v?.img} style={{ width: '350px', height: '250px' }} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  </>
  )
}

export default Bedrooms