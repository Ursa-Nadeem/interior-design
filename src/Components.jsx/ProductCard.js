import React from 'react'

const ProductCard = ({productData}) => {
    console.log(productData);
  return (
    <>
    {/* Map function */}
    <section className='main-card-container' >
    {productData.map((curElem) => {
    return(
        <div className='card-container' key={curElem.id}>
        <div className='card'>
        <div className='card-body'>
       
        <img src={curElem.image} className='card-media' />
       </div>
       </div>
       </div>
    )
    })}
   </section>
   </>
  )
}

export default ProductCard