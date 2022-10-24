import React from 'react'
import './RowButton2.css'

//second section of buttons are implemented here.
function RowButton2(prop) {
  return (
    <div className='RowButton2'>
        <button>
            {prop.value}
        </button>
    </div>
  )
}

export default RowButton2