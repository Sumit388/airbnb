import React, { useRef } from 'react'
import './BannerRow.css'
import BannerBlocks from './BannerRow/BannerBlocks'
import BannerRowButton from './BannerRow/BannerRowButton'
import BannerRowHeading from './BannerRow/BannerRowHeading'
import { BannerData } from '../Data/BannerData'


function BannerRow() {
  //Ref for controlling the scroll of the banner items.
  const content = useRef();
  //variable for passing different keys to the mapped icon
  let i = 0;

  //on scoll button click this function is called. And afte being called the fuction changes the scroll state of the banner items. 
  const handleScroll = (value) => {
    content.current.scrollLeft += value;
  }

  return (
    <div className='BannerRow'>
      <div className="RowFunctions" >
        <BannerRowHeading />
        {/*handle scroll funtion is pased to the buttons elements*/}
        <BannerRowButton handleScroll={handleScroll} />
      </div>
      {/*Mapping the banner items here & value to be mapped is passed as a prop*/}
      <div className="rowContent" ref={content}>
        {
          BannerData.map((prop) => {
            return <BannerBlocks prop={prop} key={i++} />
          })}
      </div>
    </div>
  )
}

export default BannerRow