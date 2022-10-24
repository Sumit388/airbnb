import React from 'react'
import './RightOptions.css'
import { TbWorld } from 'react-icons/tb/index';
import MenuIcon from './MenuIcon';

function RightOptions() {
  return (
    <div className='RightOptions'>
        <button className='RightOptionsButton1'>Become a host</button>
        <button className='RightOptionsButton2'><TbWorld/></button>
        <MenuIcon/>
    </div>
  )
}

export default RightOptions