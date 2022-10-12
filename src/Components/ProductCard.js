import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ProductCard = ({ productData }) => {
  console.log(productData);
  return (
    <>
      <Box
        pl={{ sm: 9 }} pr={{ sm: 5 }}
        py={{ sm: 10 }}

      >
        <Grid container rowSpacing={1}
          spacing={{ sm: 0 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >

          {productData.map((curElem) => {
            return (
              <Grid item xs={6} lg={3.5} md={4} sm={6}>
                <img src={curElem.image} style={{ width: '350px', height: '250px' }} />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

export default ProductCard