import React from 'react'
import Logo from './Header/Logo'
import ToogleSearch from './Header/ToogleSearch'
import ShoppingCart from './Header/ShoppingCart'
import ListOpition from './Header/ListOption'
import PageFirst from './Header/PageFirst'
const TotalHeader = () => {
    return (
        <div>
             <div className='container'>
        <div className="App">
            <Logo className="logo">
                     <img src='https://soccerstore.vn/wp-content/uploads/2020/07/20140115_-White-shading-logo-1.png' alt ='' style={{background:'cover'}}></img>
            </Logo>
            <ToogleSearch></ToogleSearch>
            <ShoppingCart></ShoppingCart>
            <br></br>
        </div>
        <hr></hr>
        <div>
             <ListOpition className='item-option'></ListOpition>
        </div>
       </div>
       <hr></hr>
       <div>
           <PageFirst></PageFirst>
       </div>
       <hr></hr>
        </div>
    )
}

export default TotalHeader