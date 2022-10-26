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
                        <h1 className='service-heading' style={{ color: '#FE9C40', fontSize: '70px' }}>OUR SERVICES</h1>
                    </Roll>
                </div>
            </div>
            {/* // pl={{ sm: 9 }} pr={{ sm: 5 }} */}

            {/* navbar */}
            <nav>

                <div className='navbar-menu'>
                    <container className='menu'>
                        <div className='btn-group'></div>
                        

                        <div>
                        <button className='btn-menu' onClick={() => setProductData(Product)}>All<span className='vline'>|</span></button>
                        <button className='btn-menu' onClick={() => filterItem("aluminium")}>Aluminium<span className='vline'>|</span></button>
                        <button className='btn-menu' onClick={() => filterItem("falseCeiling")}>False Ceiling<span className='vline'>|</span></button>
                        <button className='btn-menu' onClick={() => filterItem("woodflooring")}>Wooden floor<span className='vline'>|</span></button>
                        <button className='btn-menu' onClick={() => filterItem("glasspaper")}>Glass paper<span className='vline'>|</span></button>
                        <button className='btn-menu' onClick={() => filterItem("wallpic")}>Wall picture<span className='vline'>|</span></button>
                        <button className='btn-menu' onClick={() => filterItem("wallpaper")}>Wall paper<span className='vline'>|</span></button>
                        <button className='btn-menu' onClick={() => filterItem("windowblind")}>Window blind<span className='vline'>|</span></button>
                        <button className='btn-menu' onClick={() => filterItem("vinyleflooring")}>Vinyle flooring<span className='vline'>|</span></button>
                        <button className='btn-menu' onClick={() => filterItem("fupvcdoor")}>Upvc Door<span className='vline'>|</span></button>
                        <button className='btn-menu' onClick={() => filterItem("carpets")}>Carpets<span className='vline'>|</span></button>
                         <button className='btn-menu' onClick={() => filterItem("walltexture")}>Wall Texture</button>
                        </div>

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