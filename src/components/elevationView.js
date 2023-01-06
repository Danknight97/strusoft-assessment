import React from 'react'
import { Canvas } from '@react-three/fiber'

function ElevationView({height, width, inputUnit}) {
  return (
    <>
    <header>Elevation View</header>
    <br/>
    <Canvas>
        <ambientLight/>
        <mesh>
            <planeBufferGeometry attach="geometry" args={[width,height]}/>
            <meshPhongMaterial attach="material" color="blue"/>
        </mesh>
    </Canvas>
    <span className='vertical-writing'>height = {height} {inputUnit ? "m" : "feet"}</span>
    <span>width = {width} {inputUnit ? "m" : "feet"}</span>
    </>
  )
}

export default ElevationView