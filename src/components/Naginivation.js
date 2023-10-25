import React from 'react'
import { Link } from 'react-router-dom'
const Naginivation = () => {
    return (
        <div>
            <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/about"></Link>
            </li>
          </ul>
          <Link to="/ButtonLogIn" ><button className="button1">Login</button></Link>
    <Link to="/SigIn"><button className="button2">Sign Up</button></Link>
           </nav>
        </div>
    )
}

export default Naginivation