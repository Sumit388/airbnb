import React from 'react'
import './RowButton1.css'

//First section of buttons are are implemented here.
function RowButton1(prop) {
  return (
    <div className='RowButton1'>
        <button>
            {prop.value}
        </button>
    </div>
  )
}

export default RowButton1