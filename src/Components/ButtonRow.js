import React, { useRef, useState } from 'react'
import './ButtonRow.css'
import RowButton1 from './ButtonRow/RowButton1'
import { section1Button } from '../Data/ButtonRowData'
import RowButton2 from './ButtonRow/RowButton2'
import { section2Button } from '../Data/ButtonRowData'
import SwipeButtons from './ButtonRow/SwipeButtons'

function ButtonRow() {
    //this state variable is used to control the appearance of left scroll button
    const [scroll, setScroll] = useState(0);

    //Ref for controlling the scroll of the button items.
    const buttons = useRef();

    //variable for passing different keys to the mapped icon
    let i = 0;

    //on scoll button click this function is called. And afte being called the fuction changes the scroll state of  the button items. 
    const hadlebuttonScrool = (event) => {
        buttons.current.scrollLeft += event;
    }


    return (
        <div className='ButtonRow'>

            <div className="section1">
                {/*The first section of the button items are mapped here(On with the white background)*/}
                {/*The button texts are imported from data folder and are passed as a prop to the buttons*/}
                {section1Button.map((value) => {
                    return <RowButton1 value={value} key={i++} />
                })}
            </div>

            {/*These are the buttons that control the state of the scroll for the section 2 buttons*/}
            {/* The function to control the scroll state of section 2 buttons is passed to this element as prop*/}
            <div className="swipeButtons" >
                <SwipeButtons scroll={scroll} hadlebuttonScrool={hadlebuttonScrool} />
            </div>


            <div className="section2"
                //scroll value is used here to give extra magin on left for implementing that cool effect of left scroll button disappearing
                style={scroll <= 4 ? { marginLeft: 20 } : { marginLeft: 60 }}
                onScroll={(event) => { setScroll(event.target.scrollLeft) }}
                ref={buttons}>

                {/*The second section of the button items are mapped here(On with the grey background)*/}
                {/*The button texts are imported from data folder and are passed as a prop to the buttons*/}
                {section2Button.map((value) => {
                    return <RowButton2 value={value} key={i++} />
                })}
            </div>

        </div>
    )
}

export default ButtonRow