import React from 'react'
import BannerRow from '../Components/BannerRow'
import ButtonRow from '../Components/ButtonRow'
import HostRow from '../Components/HostRow'
import Navbar from '../Components/Navbar'
import './Experiences.css'


function Experiences() {
  return (
    <div className='Experiences'>
        <Navbar/>
        <BannerRow/>
        <ButtonRow/>
        <HostRow/>
    </div>
  )
}

export default Experiences