import React from 'react'
import ButtonLogIn from './LogIn/ButtonLogIn'
import { Link } from 'react-router-dom'
const LogIn = () => {
    return (
      <Link to='/' >
            <ButtonLogIn></ButtonLogIn>
      </Link>
    )
}

export default LogIn