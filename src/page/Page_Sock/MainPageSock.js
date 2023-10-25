import React from 'react'
import TotalFooter from '../../components/TotalFooter'
import ProductSock from './Socks/ProductSock'
import TitleSock from './Socks/TitleSock'
import TotalHeader from '../../components/TotalHeader'

const MainPageSock = () => {
    return (
        <div>
            <TotalHeader/>
            <TitleSock/>
            <ProductSock/>
            <TotalFooter/>
        </div>
    )
}

export default MainPageSock