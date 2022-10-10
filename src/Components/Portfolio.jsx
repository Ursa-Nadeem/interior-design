import React from 'react'
import Roll from 'react-reveal/Roll';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import living1 from "../Assets/living room/livingroom1.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Portfolio = () => {
  return (
    <>
      <div className='mainPortfolio'>
      
        <div className="portfolioText">
        <Roll left>
          <p >OUR EXCLUSIVE CLIENT</p>
          <h1 style={{color: '#FAB407' ,fontSize:'70px'}}>Project Sites</h1>
          <p style={{fontSize:'20px'}}>We Have Solutions For All Your Space Related Issues!</p>
          </Roll>
        </div>
        </div>

        {/* Grid */}
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
        <Grid item xs={4}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={4}>
          <img src={living1} style={{width:'500px'}} />
        </Grid>
        <Grid item xs={4}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Portfolio