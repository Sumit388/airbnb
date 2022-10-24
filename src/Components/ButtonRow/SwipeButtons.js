import React from 'react'
import './SwipeButtons.css'
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

//These are the buttons to control the scroll of the second section of buttons.
function SwipeButtons(prop) {
  return (
    <div className='SwipeButtons' >
         
         {/*Controlling the visibilty of the left-scroll with the help of the state that is passed down as a prop*/}
         {/*If the section two buttons are not scrolled then visibility should be hidden else it be visible*/}
        <div className="buttonBox" style={prop.scroll<=10?{visibility: "hidden" }:{visibility:"visible"}}>
        <div className="gradient1"></div>
            <button className='button1' onClick={()=>prop.hadlebuttonScrool(-658.4)} >
           <AiOutlineLeft/>
        </button>
        </div>

        <div className="buttonBox">
        <div className="gradient2"></div>
            <button className='button2' onClick={()=>prop.hadlebuttonScrool(658)}>
           <AiOutlineRight/>
        </button>

        </div>
    </div>
  )
}

export default SwipeButtons