import React, { useRef } from 'react'
import './HostRow.css'
import HostDetail from './HostRow/HostDetail'
import { hosts } from '../Data/HostData'
import BannerRowButton from './BannerRow/BannerRowButton'

function HostRow() {
  //Ref for controlling the scroll of the host cards.
  const content = useRef();
  //variable for passing different keys to the mapped icon
  let i = 0;
  //on scoll button click this function is called. And afte being called the fuction changes the scroll state of the host cards.
  const handleScroll = (value) => {
    content.current.scrollLeft += value;
  }

  return (
    <div className='HostRow'>

      
      {/*Heading Section*/}
      <div className="heading">
        <h2>
          Try hovering cards below
        </h2>
        <BannerRowButton handleScroll={handleScroll} />
      </div>

      {/*Host cards & details are mapped here and data to be mapped is called from the data folder and passed as prop*/}
      <div className="content" ref={content}>
        {hosts.map((host) => {
          return <HostDetail host={host} key={i++} />
        })}
      </div>
    </div>
  )
}

export default HostRow