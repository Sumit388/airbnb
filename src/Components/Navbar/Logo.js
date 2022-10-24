import React from 'react'
import './Logo.css'
import logo from '../../Assets/logo.png'

function Logo() {
  return (
    <div className='Logo'>
        <img src={logo} alt="" />
    </div>
  )
}

export default Logo