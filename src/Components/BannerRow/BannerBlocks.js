import React from 'react'
import './BannerBlocks.css'

function BannerBlocks(prop) {
  //Items to be mapped for every banner is passed as aprop to this element.
  return (
    <div className='BannerBlocks'>
      <div className="gradient"></div>
      <div className="para"> <p>{prop.prop.type}</p></div>
      <div className="heading"><h2>{prop.prop.heading}</h2></div>
      <div className="bannerBlockButton"><button>Show all</button></div>
      <img src={prop.prop.image || prop.prop.altImage} alt="" className='BannerBlocksImg' />

    </div>
  )
}

export default BannerBlocks