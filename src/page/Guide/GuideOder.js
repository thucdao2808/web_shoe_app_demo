import React from 'react'
import GuideClient from './GuideClient/GuideClient'
import TotalFooter from '../../components/TotalFooter'
import TotalHeader from '../../components/TotalHeader'
import { Link } from 'react-router-dom'
const GuideOder = () => {
    return (
      <div>
           <TotalHeader></TotalHeader>
            <GuideClient/>
            <TotalFooter></TotalFooter>
          </div> 
       
       
    )
}

export default GuideOder