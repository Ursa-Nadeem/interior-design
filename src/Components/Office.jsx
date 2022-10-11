import React from 'react'
import Roll from 'react-reveal/Roll';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import office1 from '../Assets/office/office1.jpg';
import office2 from '../Assets/office/office2.jpg';
import office3 from '../Assets/office/office3.jpg';
import office4 from '../Assets/office/office4.png';
import office5 from '../Assets/office/office5.jpg';



const office = [
    {
        img: office1,
    },
    {
        img: office2,
    },
    {
        img: office3,
    },
    {
        img: office4,
    },
    {
        img: office5,
    }
]

const Office = () => {
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
            <h1>Office Space</h1>
            <p>It's the perfect space to be inspired. It's a place to explore. A place to imagine. A place to be creative. And it can be yours.</p>
          </div>
        </Grid>
        {office?.map((v, i) => {
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

export default Office