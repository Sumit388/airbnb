import React from 'react'
import './BannerRowButton.css'
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';


function BannerRowButton(prop) {
  return (
    <div className='BannerRowButton'>
      {/* Onclicking this button the handleScroll funtion is called in the function which changes the scroll state of the banner row.*/}
      <button className='button1' onClick={() => prop.handleScroll(-646.4)}>
        <AiOutlineLeft />
      </button>
      <button className='button2' onClick={() => prop.handleScroll(646.4)}>
        <AiOutlineRight />
      </button>
    </div>
  )
}

export default BannerRowButton