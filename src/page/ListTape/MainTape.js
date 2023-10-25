import React from 'react'
import TItleTape from './Tape_list/TItleTape'
import TotalFooter from '../../components/TotalFooter'
import TotalHeader from '../../components/TotalHeader'
import ProductTape from './Tape_list/ProductTape'

const MainTape = () => {
    return (
        <div>
            <TotalHeader/>
            <TItleTape/>
            <ProductTape/>
            <TotalFooter/>
        </div>
    )
}

export default MainTape