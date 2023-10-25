import React from 'react'
import TotalFooter from '../../components/TotalFooter'
import TotalHeader from '../../components/TotalHeader'
import TitleGlove from './GloveKid/TitleGlove' 
import ProductGlove from './GloveKid/ProductGlove'
const MainGloveKid = () => {
    return (
        <div>
            <TotalHeader/>
            <TitleGlove/>
            <ProductGlove/>
            <TotalFooter/>
        </div>
    )
}

export default MainGloveKid