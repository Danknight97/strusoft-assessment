import { Form, InputNumber } from 'antd'
import React from 'react'

function OutputPanel({length, height, width, outputUnit, inputUnit}) {
    var volume;
    if(inputUnit === false && outputUnit === true){
        const newLength = length/3.2
        const newWidth = width/3.2
        const newHeight = height/3.2
        volume = newLength * newWidth * newHeight
    }
    else if(inputUnit === true && outputUnit === false){
        const newLength = length * 3.2
        const newWidth = width * 3.2
        const newHeight = height * 3.2
        volume = newLength * newWidth * newHeight
    }
    else{
        volume = length * width * height;
    }
  return (
    <div>
        <header>Output Field</header>
        <Form>
            <Form.Item label="Volume">
                <InputNumber value={volume} disabled/>
                <span>{outputUnit ? "m" : "feet"}</span>
            </Form.Item>
        </Form>
    </div>
  )
}

export default OutputPanel