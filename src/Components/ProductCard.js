import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Fade from 'react-reveal/Fade';

const ProductCard = ({ productData }) => {
  console.log(productData);
  return (
    <>
      <Box
        pl={{ sm: 3 }} pr={{ sm:2 }}
        py={{ sm: 1 }}

      >
        <Grid container rowSpacing={1}
          spacing={{ sm:1 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >

          {productData.map((curElem) => {
            return (
              
              <Grid item xs={12} lg={3} md={4} sm={6} className="image-grid">
                <Fade bottom>
                  <div className='container-img'>
                <img src={curElem.image} className="servicesImages" />
                </div>
                </Fade>
              </Grid>
            
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

export default ProductCard