import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import Tshirt from './Tshirt'
import Backdrop from  './Backdrop'
import CameraRig from './CameraRig'

const CanvasModel = () => {
  return (
    <Canvas
    shadows
    camera={{ position: [0,0,0], fov: 25}}
    gl={{preserveDrawingBuffer: true}}// preserve the buffers
    className='w-full max-w-full h-full transition-all ease-in'
    >
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>

      <CameraRig>
        <Backdrop/>
        <Center>
          <Tshirt/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel
