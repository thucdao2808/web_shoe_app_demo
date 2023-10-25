import React from 'react'
import "./Oder/Layout.css"
import ShippingOder from "./Oder/ShippingOder"
import TotalFooter from '../../components/TotalFooter'
import TotalHeader from '../../components/TotalHeader'
import Link from '../../components/footer/Link'
const Delivery = () => {
    return (
         <div>
            
               <TotalHeader/>
               <ShippingOder></ShippingOder>
                <TotalFooter/>
        </div>
    
    )
}

export default Delivery