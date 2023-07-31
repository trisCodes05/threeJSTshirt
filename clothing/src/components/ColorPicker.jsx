import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'
import { color } from 'framer-motion'

const ColorPicker = () => {
  const snap  = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
       color={snap.color}
       disableAlpha
      //  presetColors={
      //   ['#FF7F50', '#B22222' , '#FF69B4' ,'#FFFACD']
      //  }
       onChange={(color)=> state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
