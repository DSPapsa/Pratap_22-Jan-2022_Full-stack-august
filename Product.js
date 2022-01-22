import React from 'react';
import './Product.css';


function Product({id,title,image,price}) {

  
  return (
    <div className='product'>
    <div className='product_info'>
    <p>{title}</p>  
      </div>
      <img src={image} alt=''/>
      <p className='product_price'>
      <small>₹</small>
      <strong>{price}</strong>
      </p> 
      <button >Add To Cart</button>
</div>
  );
}

export default Product;
