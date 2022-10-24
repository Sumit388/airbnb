import React, { useState } from 'react'
import './HostDetail.css'
import { AiFillStar } from 'react-icons/ai/';
import { AiFillHeart } from 'react-icons/ai/';

function HostDetail(props) {
  //This is state variable is used to control the video playback on mouse entering the card.
  const [play, setPlay] = useState(() => { return false });

  //Function to start playing video on mouse enter.
  const handleVideoPlay = () => {
    setPlay(true);
  }

  //Function to stop playing video on mouse leave.
  const handleVideoPause = () => {
    setPlay(false);
  }

  return (
    <div className='HostDetail'>
      {/*Calling the function to update state variable on mouse enter and on mouse leave*/}
      <div className="image" onMouseEnter={handleVideoPlay} onMouseLeave={handleVideoPause}>

        {/*Heart Icon*/}
        <AiFillHeart className='heart' />

        {/* Video element controlled with the play state*/}
        <div className="video" style={play ? { display: "block" } : { display: "none" }}>
          <video src={play ? props.host.video : ""}
            type="video/mp4"
            autoPlay={true}
            muted >
          </video>
        </div>

        {/*Image Elemnt */}
        <img src={props.host.image} alt="" />
      </div>

      {/**First Line after cards conating rating & laction*/}
      <div className="firstLine">
        <AiFillStar />
        <p>{props.host.rating}</p>
        <p>.</p>
        <p>{props.host.location}</p>
      </div>

      {/**Second Line after cards containg description*/}
      <div className="secondLine">
        <p>{props.host.description}</p>
      </div>

      {/*Third Line after cards conating price*/}
      <div className="thirdLine">
        <p><b>From {props.host.rate}</b> /person</p>
      </div>
    </div>
  )
}

export default HostDetail