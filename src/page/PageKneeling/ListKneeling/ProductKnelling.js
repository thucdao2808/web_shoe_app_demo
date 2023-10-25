import React from 'react'
import { DataListKneeling } from './ApiKneeling'
const ProductKnelling = () => {
    return (
        <div className='string-product'>
        {DataListKneeling.map((item, index) => (
          <div className='product' key={item.id}>
            <img className="repair-img" src={item.image} alt={item.title} />
            <h2 className='repair-title'>{item.title}</h2>
            <div className='price'>
              <span className='repair-price'>{item.price}</span>
              <span className='repair-price-sale'>{item.priceSale}</span>
            </div>
          </div>
        ))}
      </div>
    )
}

export default ProductKnelling