import React from 'react'
import PerformDelivery from './PerFormDelivery/PerformDelivery'
import TotalFooter from '../../components/TotalFooter'
import TotalHeader from '../../components/TotalHeader'
import Scroll from '../page_1/Scoll-top.js/Scoll'
const MainInformation = () => {
    return (
        <div>
            <TotalHeader/>
            <PerformDelivery/>
            <TotalFooter/>
            <Scroll/>
        </div>
    )
}

export default MainInformation