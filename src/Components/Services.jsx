import React, { useState } from 'react'
import Roll from 'react-reveal/Roll';
import Product from './productApi';
import ProductCard from './ProductCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
            <div className='main-services'>

                <div className="serviceText">
                    <Roll left>
                        <h1 style={{ color: '#FAB407', fontSize: '70px' }}>OUR SERVICES</h1>
                    </Roll>
                </div>
            </div>

            {/* navbar */}
            <nav>

                <div className='navbar'>
                    <container className='menu'>
                        <div className='btn-group'></div>
                        <Box
                            // pl={{ sm: 9 }} pr={{ sm: 5 }}
                            py={{ sm: 10 }}
                            px={{sm:4}}

                        >
                            <Grid container rowSpacing={1}
                                spacing={{ sm: 0 }}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={6} lg={1.4} md={1.2} sm={1.2}>
                                    <button onClick={() => filterItem("aluminium")}>Aluminium</button>
                                </Grid>
                                <Grid item xs={6} lg={1.4} md={1.2} sm={1.2}>
                                    <button onClick={() => filterItem("aluminium")}>Aluminium</button>
                                </Grid>
                                <Grid item xs={6} lg={1.4} md={1.2} sm={1.2}>
                                    <button onClick={() => filterItem("aluminium")}>Aluminium</button>
                                </Grid>
                                <Grid item xs={6} lg={1.4} md={1.2} sm={1.2}>
                                    <button onClick={() => filterItem("aluminium")}>Aluminium</button>
                                </Grid>
                                <Grid item xs={6} lg={1.4} md={1.2} sm={1.2}>
                                    <button onClick={() => filterItem("aluminium")}>Aluminium</button>
                                </Grid>
                                <Grid item xs={6} lg={1.4} md={1.2} sm={1.2}>
                                    <button onClick={() => filterItem("aluminium")}>Aluminium</button>
                                </Grid>
                                <Grid item xs={6} lg={1.4} md={1.2} sm={1.2}>
                                    <button onClick={() => filterItem("aluminium")}>Aluminium</button>
                                </Grid>
                                <Grid item xs={6} lg={1.4} md={1.2} sm={1.2}>
                                    <button onClick={() => filterItem("aluminium")}>Aluminium</button>
                                </Grid>
                                <Grid item xs={6} lg={1.4} md={1.2} sm={1.2}>
                                    <button onClick={() => filterItem("aluminium")}>Aluminium</button>
                                </Grid>


                            </Grid>
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
                </div>
                {/* </div> */}
            </nav>
            {/* props */}
            <ProductCard productData={productData} />
        </>
    )
}

export default Services