import React from 'react'
import { Canvas } from '@react-three/fiber'

function PlaneView({length, width, inputUnit}) {
  return (
    <>
    <header>Plane View</header>
    <br/>
    <Canvas 
    
    >
        <ambientLight/>
        <mesh>
            <planeBufferGeometry attach="geometry" args={[width,length]}/>
            <meshPhongMaterial attach="material" color="blue"/>
        </mesh>
    </Canvas>
    <span className='vertical-writing'>length = {length} {inputUnit ? "m" : "feet"}</span>
    <span>width = {width} {inputUnit ? "m" : "feet"}</span>
    </>
  )
}

export default PlaneView