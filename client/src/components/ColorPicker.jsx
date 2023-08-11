import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}                              // default color
        disableAlpha                                    // disable user to change alpha
        presetColors={[ '#000','#fff','#fff000' ]}      // provide a preset colors to choose from ( you can remove this to have preset colors made by react-color)
        onChange={(color) => state.color = color.hex}   // allow us to pick a color and change the state color to that chosen color
      />
    </div>
  )
}

export default ColorPicker