import React from 'react'
import Logo from "./Header"
import ToogleSearch from "./Header"
import ShoppingCart from "./Header"
import ListOpition from "./Header"
const Header = () => {
    return (
        <div>
             <div className='container'>
        <div className="App">
            <Logo className="logo">
                     <img src='#none' alt ='' style={{background:'cover'}}></img>
            </Logo>
            <ToogleSearch></ToogleSearch>
            <ShoppingCart></ShoppingCart>
            <br></br>
        </div>
        <div>
             <ListOpition className='item-option'></ListOpition>
        </div>
       </div>
        </div>
    )
}

export default Header;