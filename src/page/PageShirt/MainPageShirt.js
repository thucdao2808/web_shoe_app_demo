import React from 'react'
import TotalFooter from '../../components/TotalFooter'
import TotalHeader from '../../components/TotalHeader'
import ProductShirt from './ListShirt/ProductShirt'
import TitleShirt from './ListShirt/Title'


const MainPageShirt = () => {
    return (
        <div>
            <TotalHeader/>
            <TitleShirt/>
            <ProductShirt/>
            <TotalFooter></TotalFooter>
        </div>
    )
}

export default MainPageShirt