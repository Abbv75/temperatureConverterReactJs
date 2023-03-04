import './App.css';
import React,{useState} from 'react'
import Thermo from './component/Thermo';

function App() {
  let unitGap=1;
  const [input1,setInput1Val]=useState(0);
  const [input2,setInput2Val]=useState(0);

  function changeInput1(e){
    setInput1Val(e.target.value);
  }
  function changeInput2(e){
    setInput2Val(e.target.value);
  }
  

  const checkUnit1= ()=>{
    let select1= document.querySelector('#select1 select').value;
    let select2= document.querySelector('#select2 select').value;
    let input1= document.querySelector('#select1 input');
    
    unitGap = (select1=='c' && select2=='c') ? 1 : unitGap
    unitGap = (select1=='c' && select2=='f') ? 33.8 : unitGap
    unitGap = (select1=='c' && select2=='k') ? 274.15 : unitGap

    unitGap = (select1=='f' && select2=='f') ? 1 : unitGap
    unitGap = (select1=='f' && select2=='c') ? -17.2222 : unitGap
    unitGap = (select1=='f' && select2=='k') ? 255.928: unitGap

    unitGap = (select1=='k' && select2=='k') ? 1: unitGap
    unitGap = (select1=='k' && select2=='c') ? -272.15: unitGap
    unitGap = (select1=='k' && select2=='f') ? -457.87: unitGap

    setInput2Val((input1.value*unitGap).toFixed(2))

  }
  
  const checkUnit2= ()=>{
    let select1= document.querySelector('#select1 select').value;
    let select2= document.querySelector('#select2 select').value;
    let input2= document.querySelector('#select2 input');
    
    unitGap = (select2=='c' && select1=='c') ? 1 : unitGap
    unitGap = (select2=='c' && select1=='f') ? 33.8 : unitGap
    unitGap = (select2=='c' && select1=='k') ? 274.15 : unitGap

    unitGap = (select2=='f' && select1=='f') ? 1 : unitGap
    unitGap = (select2=='f' && select1=='c') ? -17.2222 : unitGap
    unitGap = (select2=='f' && select1=='k') ? 255.928: unitGap

    unitGap = (select2=='k' && select1=='k') ? 1: unitGap
    unitGap = (select2=='k' && select1=='c') ? -272.15: unitGap
    unitGap = (select2=='k' && select1=='f') ? -457.87: unitGap

    setInput1Val((input2.value*unitGap).toFixed(2))
  }

  return (
    <div className="App">
      <h1 align="center">
        Temperature converter
      </h1>
      <div className='container'>
        <div>
          <div className='selectZone' id='select1' onChange={checkUnit1}>
            <input value={input1} type="number" placeholder='Saisissez la temperature' onChange={changeInput1}/>

            <select >
              <option value='c'>C</option>
              <option value='f'>F</option>
              <option value='k'>K</option>
            </select>
          </div>
          
          <div className='selectZone' id='select2' onChange={checkUnit2}>
            <input value={input2} type="number" placeholder='Saisissez la temperature' onChange={changeInput2}/>

            <select >
              <option value='f'>F</option>
              <option value='c'>C</option>
              <option value='k'>K</option>
            </select>
          </div>
        </div>
        
      </div>
        
    </div>
  );
}

export default App;
