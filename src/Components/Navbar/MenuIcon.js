import React, {useState} from 'react'
import './MenuIcon.css'
import { FaUserCircle } from 'react-icons/fa/';
import { FaBars } from 'react-icons/fa/';

function MenuIcon() {

  //This state variable manages the if the munu box is visible or not.
const [display,setDisplay]=useState(()=>{return false});

//To close and open the menu box.
const toggleListDisplay=()=>{
   setDisplay((display)=>{return !display});
}

  return (
    <div className='MenuIcon'>

      {/* Right side profile icon*/}
        <button className='MenuIconButton' onClick={toggleListDisplay}>
         <FaBars className='bars'/>
         <FaUserCircle className='user'/>
        </button>

        {/*dialog box*/}
         <div className="menulist" style={display?{display:"block"}:{display:"none"}}>
            <div className="FirstSec">
                <ul>
                    <li><a href="\" className='highlighted'>Sign up</a></li>
                    <li><a href="\">Log in</a></li>
                </ul>
            </div>
            <div className="secondSec">
                <ul>
                <li><a href="\">Host your Home</a></li>
                <li><a href="\">Host an experience</a></li>
                <li><a href="\">Help</a></li>
                </ul>
               
            </div>
         </div>
    </div>
  )
}

export default MenuIcon