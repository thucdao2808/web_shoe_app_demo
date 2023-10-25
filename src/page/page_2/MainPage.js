import React from 'react'
import Content from './Content-1/Content'
import TotalHeader from '../../components/TotalHeader'
import TotalFooter from '../../components/TotalFooter'
import Scroll from "../page_1/Scoll-top.js/Scoll.js"
import { Link } from 'react-router-dom'
const MainPage = () => {
    return (
        <div>
             <TotalHeader/>
             <Content></Content>
             <Scroll></Scroll>
             <TotalFooter/>  
        </div>
    )
}

export default MainPage