import React, { useState } from 'react'
import Product from './productApi';
import ProductCard from './ProductCard';

const Services = () => {
    const [productData, setProductData] = useState(Product);
    
    // function
    const filterItem = (category) =>{
       const updatedList = Product.filter((curElem) => {
          return curElem.category===category;
       })
       setProductData(updatedList);
    }
  return (
   <>
   {/* navbar */}
   <nav>
    <div className='main-services'>
        <h1 className='head-services'>OUR SERVICES</h1>
    <div className='navbar'>
        <div className='btn-group'></div>
        <button className='btn-group__item' onClick={() => setProductData(Product)}>All</button>
        <button className='btn-group__item' onClick={() => filterItem("aluminium")}>Aluminium</button>
        <button className='btn-group__item' onClick={() => filterItem("falseCeiling")}>False Ceiling</button>
        <button className='btn-group__item' onClick={() => filterItem("woodflooring")}>Wooden floor</button>
        <button className='btn-group__item' onClick={() => filterItem("glasspaper")}>Glass paper</button>
        <button className='btn-group__item' onClick={() => filterItem("wallpic")}>Wall picture</button>
        <button className='btn-group__item' onClick={() => filterItem("wallpaper")}>Wall paper</button>
        <button className='btn-group__item' onClick={() => filterItem("windowblind")}>Window blind</button>
        <button className='btn-group__item' onClick={() => filterItem("vinyleflooring")}>Vinyle flooring</button>
        <button className='btn-group__item' onClick={() => filterItem("fupvcdoor")}>Upvc Door</button>
    </div>
    </div>
   </nav>
   {/* props */}
   <ProductCard  productData={productData}/>
   </>
  )
}

export default Services