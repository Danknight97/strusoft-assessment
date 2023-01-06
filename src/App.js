import './App.css';
import {inputForm} from './api/inputForm';
import { data } from './api/data';
import { InputNumber, Form, Switch } from 'antd';
import PlaneView from './components/planeView';
import ElevationView from './components/elevationView';
import OutputPanel from './components/outputPanel';
import { useState } from 'react';

function App() {
  const [length, setLength] = useState(data.input.structures[0].elements[0].geometry["cross-section"].rectangle.length)
  const [width, setWidth] = useState(data.input.structures[0].elements[0].geometry["cross-section"].rectangle.width)
  const [height, setHeight] = useState(data.input.structures[0].elements[0].geometry.height)
  const [inputUnit, setInputUnit] = useState(true)
  const [outputUnit, setOutputUnit] = useState(true)

  return (
    <div className="App">
      <div>
      <header>
        {inputForm?.component}
      </header>
      <div className='form'>
      {inputForm?.fields.map((item, index) =>
        <Form
        labelCol={{span:2}}
        wrapperCol={{span:2}}
        key={index}
        fields={
          [
            {
              "name": item?.label,
              "value": item?.label === "Height" ? data.input.structures[0].elements[0].geometry.height : item?.label === "Length" ?
              data.input.structures[0].elements[0].geometry["cross-section"].rectangle.length :
              data.input.structures[0].elements[0].geometry["cross-section"].rectangle.width
            }
          ]
        }
        >
          
          <Form.Item name={item?.label} label={item?.label} key={index}>
            <InputNumber min={1} max={10} placeholder={item?.label}
             defaultValue={item?.label === "Height" ? 
             data.input.structures[0].elements[0].geometry.height : 
             item?.label === "Length" ?
             data.input.structures[0].elements[0].geometry["cross-section"].rectangle.length :
             data.input.structures[0].elements[0].geometry["cross-section"].rectangle.width
            }
            value={
              item?.label === "Height" ?
               height :
               item?.label === "Length" ?
               length :
               width
            }
             onChange={(e)=> {
              console.log(e, item?.label)
              if(item?.label === "Height"){
                setHeight(e)
              }
              else if(item?.label === "Length"){
                setLength(e)
              }
              else{
                setWidth(e)
              }
              }}/>
            <span> {inputUnit ? item?.unit : "feet"}</span>
          </Form.Item>                
        </Form>
         )}  
      </div>
      </div>

      <div className='switch-form'>
        <Form
        labelCol={{span:16}}
        wrapperCol={{span:16}}>
          <Form.Item label='Input Unit:'>
            <Switch checkedChildren="m" unCheckedChildren="feet" onChange={(e)=>setInputUnit(e)} defaultChecked/>
          </Form.Item>

          <Form.Item label='Output Unit:'>
            <Switch checkedChildren="m" unCheckedChildren="feet" onChange={(e)=>setOutputUnit(e)} defaultChecked/>
          </Form.Item>
        </Form>
      </div>
      <div className='plane-view'>
      <PlaneView length={length} width={width} inputUnit={inputUnit}/>
      </div>
      <br/>
      <div className='elevation-view'>
      <ElevationView height={height} width={width} inputUnit={inputUnit}/>
      </div>
      <div className='output-panel'>
      <OutputPanel length={length} height={height} width={width} outputUnit={outputUnit} inputUnit={inputUnit}/>
      </div>
    </div>
  );
}

export default App;
