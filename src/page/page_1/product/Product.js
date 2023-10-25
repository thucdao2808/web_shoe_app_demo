
import React from 'react';
import { DataList } from './ApiTemp';
import './Layout.css'
import { Link } from 'react-router-dom';
const Product = () => {
  console.log(DataList);
  return (
    <div className='string-product'>
      {DataList.map((item, index) => (
        <div className='product' key={item.id}>
        <Link to="/Mechanical"> 
           <img className="repair-img" src={item.image} alt={item.title} />
        </Link>
          <h2 className='repair-title'>{item.title}</h2>
          <div className='price'>
            <span className='repair-price'>{item.price}</span>
            <span className='repair-price-sale'>{item.priceSale}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
