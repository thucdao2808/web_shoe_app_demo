import React from 'react'
import {DataListPage} from "./DataApi"
import './Layout.css'
const Trending = () => {
    return (
        <div className='move-product'>
         <div className='space'>

         </div>
         <div className='no-space'>
            <h1 className='line-trending'>Trending</h1>
            <div className='string-product'>
          {DataListPage.map((item, index) => (
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
    </div>
        </div>
    )
}

export default Trending