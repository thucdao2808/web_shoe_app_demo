import React from 'react'
import GuideCheckout from './GuideClient/GuideCheckout'
import TotalHeader from '../../components/TotalHeader'
import TotalFooter from '../../components/TotalFooter'
const GuideCheckoutMain = () => {
    return (
         <div>
          <TotalHeader></TotalHeader>
            <GuideCheckout/>
            <TotalFooter></TotalFooter>
         </div>
    )
}

export default GuideCheckoutMain