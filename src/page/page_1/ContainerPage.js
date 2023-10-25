import React from 'react'
import Directory from './category/Directory'
import TradeMark from './category/TradeMark'
import LineShoe from './category/LineShoes'
import TypeLine from './category/TypeNail'
import Size from './category/Size'
import Color from './category/Color'
import Price from './category/Price'
import Title from './product/Title'
import Product from './product/Product'
import Pagination from './Paginination/Paginination'
import Trending from './product-next/Trending'
import Scroll from './Scoll-top.js/Scoll'
import { Link } from 'react-router-dom'
import TotalHeader from '../../components/TotalHeader'
import TotalFooter from '../../components/TotalFooter'
const Container_page = () => {
    return (
        <div>
            <TotalHeader></TotalHeader>
            <div className='page'>
           <div className='list-category'>
            <Directory></Directory>
            <TradeMark></TradeMark>
            <LineShoe></LineShoe>
            <TypeLine></TypeLine>
            <Size></Size>
            <Color></Color>
            <Price></Price>
           </div>
           <div className='page-product'>
              <Title></Title>
              <Product></Product>
           </div>
        </div>
        <div>
            <Pagination className='convert-page'></Pagination>
        </div>
        <div>
           <Trending className='trending-production'></Trending>
        </div>
        <TotalFooter/>
        </div>
        
       
    )
}

export default Container_page