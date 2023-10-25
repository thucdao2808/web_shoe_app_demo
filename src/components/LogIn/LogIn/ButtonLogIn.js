import React from 'react'
import "./Layout.css"
import { Link } from 'react-router-dom'
const ButtonLogIn = () => {
  const handleFlickColor = () =>{
    setTimeout(() =>{
      document.getElementById("flick-login").classList.add("click-transmit-page")
    },3000);
  }
    return (
        <div className='gellary_page'>
        <h1 className='title-login'> Chào mừng mọi người đến với trang web của chúng tôi </h1>
              <span className='click-transmit-page' id='flick-login' onChange={handleFlickColor}>Vui lòng nhập email để đi đến trang chính của chúng tôi</span>
                 <form class="form">
    <p id="heading">Log In</p>
    <div class="field">
      <input autocomplete="off" placeholder="Username" class="input-field" type="text"/>
    </div>
    <div class="field">
   
      <input placeholder="Password" class="input-field" type="password"/>
    </div>
    <div class="btn">
    <Link to="/ButtonLogIn" ><button className="button1">Login</button></Link>
    <Link to="/SigIn"><button className="button2">Sign Up</button></Link>
    </div>
    <button class="button3">Forgot Password</button>
</form>
        </div>
    )
}

export default ButtonLogIn