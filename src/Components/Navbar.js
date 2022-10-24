import React from 'react'
import "./Navbar.css"
import Logo from './Navbar/Logo'
import RightOptions from './Navbar/RightOptions'

function Navbar() {
  return (
    <div className='Navbar'>
        <Logo/>
        <RightOptions/>
    </div>
  )
}

export default Navbar