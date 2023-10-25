import React from 'react'
 import Story from './Story/Story'
 import Pagination from "../page_1/Paginination/Paginination.js"
import { Link } from 'react-router-dom'
import TotalHeader from '../../components/TotalHeader'
import TotalFooter from '../../components/TotalFooter'
const PageStory = () => {
    return (
        <div>
            <TotalHeader/>
            <Story></Story>
            <Pagination></Pagination>
            <TotalFooter/>
         </div>  
    )   
}

export default PageStory