import React, { useState } from 'react'
import Roll from 'react-reveal/Roll';
import Product from './productApi';
import ProductCard from './ProductCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Footer from './Footer'
import Navbars from './Navbars';

const Services = () => {
    const [productData, setProductData] = useState(Product);

    // function
    const filterItem = (category) => {
        const updatedList = Product.filter((curElem) => {
            return curElem.category === category;
        })
        setProductData(updatedList);
    }
    return (
        <>
            <div className='main-services' id='services'>
            {/* <Navbars/> */}
                <div className="serviceText">
                    <Roll left>
                        <h1 className='service-heading'   style={{ color: '#FAB407', fontSize: '70px' }}>OUR SERVICES</h1>
                    </Roll>
                </div>
            </div>
            {/* // pl={{ sm: 9 }} pr={{ sm: 5 }} */}

            {/* navbar */}
            <nav>

                <div className='navbar-menu'>
                    <container className='menu'>
                        <div className='btn-group'></div>
                        <Box

                            py={{ sm: 10 }}
                        // px={{ sm: 1}}

                        >
                            <Grid container rowSpacing={1}
                                spacing={{ sm: 0 }}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={4} lg={0.5} md={2.4} sm={2.4}>
                                    <button className='btn-menu' onClick={() => setProductData(Product)}>All<span className='dot'></span></button>
                                </Grid>
                                <Grid item xs={4} lg={1.2} md={2.4} sm={2.4}>
                                    <button className='btn-menu' onClick={() => filterItem("aluminium")}>Aluminium<span className='dot'></span></button>
                                </Grid>
                                <Grid item xs={4} lg={1.2} md={2.4} sm={2.4}>
                                    <button className='btn-menu' onClick={() => filterItem("falseCeiling")}>False Ceiling<span className='dot'></span></button>
                                </Grid>
                                <Grid item xs={4} lg={1.2} md={2.4} sm={2.4}>
                                    <button className='btn-menu' onClick={() => filterItem("woodflooring")}>Wooden floor<span className='dot'></span></button>
                                </Grid>
                                <Grid item xs={4} lg={1.2} md={2.4} sm={2.4}>
                                    <button className='btn-menu' onClick={() => filterItem("glasspaper")}>Glass paper<span className='dot'></span></button>
                                </Grid>
                                <Grid item xs={4} lg={1.2} md={2.4} sm={2.4}>
                                    <button className='btn-menu' onClick={() => filterItem("wallpic")}>Wall picture<span className='dot'></span></button>
                                </Grid>
                                <Grid item xs={4} lg={1.2} md={2.4} sm={2.4}>
                                    <button className='btn-menu' onClick={() => filterItem("wallpaper")}>Wall paper<span className='dot'></span></button>
                                </Grid>
                                <Grid item xs={4} lg={1.2} md={2.4} sm={2.4}>
                                    <button className='btn-menu' onClick={() => filterItem("windowblind")}>Window blind<span className='dot'></span></button>
                                </Grid>
                                <Grid item xs={4} lg={1.2} md={2.4} sm={2.4}>
                                    <button className='btn-menu' onClick={() => filterItem("vinyleflooring")}>Vinyle flooring<span className='dot'></span></button>
                                </Grid>
                                <Grid item xs={4} lg={1.2} md={2.4} sm={2.4}>
                                    <button className='btn-menu' onClick={() => filterItem("fupvcdoor")}>Upvc Door<span className='dot'></span></button>
                                </Grid>


                            </Grid>
                            <hr className='menu-line' />
                        </Box>

                        {/* <button className='btn-group__item' onClick={() => setProductData(Product)}>All</button>
        <button className='btn-group__item' onClick={() => filterItem("aluminium")}>Aluminium</button>
        <button className='btn-group__item' onClick={() => filterItem("falseCeiling")}>False Ceiling</button>
        <button className='btn-group__item' onClick={() => filterItem("woodflooring")}>Wooden floor</button>
        <button className='btn-group__item' onClick={() => filterItem("glasspaper")}>Glass paper</button>
        <button className='btn-group__item' onClick={() => filterItem("wallpic")}>Wall picture</button>
        <button className='btn-group__item' onClick={() => filterItem("wallpaper")}>Wall paper</button>
        <button className='btn-group__item' onClick={() => filterItem("windowblind")}>Window blind</button>
        <button className='btn-group__item' onClick={() => filterItem("vinyleflooring")}>Vinyle flooring</button>
        <button className='btn-group__item' onClick={() => filterItem("fupvcdoor")}>Upvc Door</button> */}
                    </container>
                    {/* // </div> */}
                </div>
            </nav>
            {/* props */}
            <ProductCard productData={productData} />

            <Footer />
        </>
    )
}

export default Services