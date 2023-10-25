import React from 'react'
import TotalHeader from '../../components/TotalHeader'
import TotalFooter from '../../components/TotalFooter'
import ProductKnelling from './ListKneeling/ProductKnelling'
import TitleKneeling from './ListKneeling/TitleKneeling'


const MainPageKneeling = () => {
    return (
        <div>
            <TotalHeader/>
            <TitleKneeling/>
            <ProductKnelling/>
            <TotalFooter/>
        </div>
    )
}

export default MainPageKneeling