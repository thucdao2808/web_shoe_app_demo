import React from 'react'
import TitleTrouser from './ListTrouser/TitleTrouser'
import TotalHeader from '../../components/TotalHeader'
import TotalFooter from '../../components/TotalFooter'
import ProductTrouser from './ListTrouser/ProductTrouser'

const MainpageTrouser = () => {
    return (
        <div>
            <TotalHeader/>
            <TitleTrouser></TitleTrouser>
            <ProductTrouser></ProductTrouser>
            <TotalFooter/>
        </div>
    )
}
export default MainpageTrouser