import './App.css';
import React,{useState} from 'react'
import Thermo from './component/Thermo';
import SelectZone from './component/SelectZone';

function App() {
  let unitGap=1;
  const [input1,setInput1Val]=useState(0);
  const [input2,setInput2Val]=useState(0);

  const [temp_termo,setTemp_termo]=useState(0);

  function changeInput1(e){
    setInput1Val(e.target.value);
  }
  function changeInput2(e){
    setInput2Val(e.target.value);
  }
  function changeTemp_termo(e){
    setTemp_termo(e);

    if(e <= 10){
      document.querySelector('.thermoLiquide').style.height= '10%'
    }
    else if(e > 100){
      document.querySelector('.thermoLiquide').style.height= '100%'
    }
    else{
      document.querySelector('.thermoLiquide').style.height= e + '%'
    }
    if(e<22){
      document.querySelector('.thermoLiquide').style.background= 'blue'
    }
    else if(e<70){
      document.querySelector('.thermoLiquide').style.background= 'orange'
    }
    else{
      document.querySelector('.thermoLiquide').style.background= 'red'
    }
  }
  
  const checkUnit1= ()=>{
    let select1= document.querySelector('#selectZone1 select').value;
    let select2= document.querySelector('#selectZone2 select').value;
    let input1= document.querySelector('#selectZone1 input');

    let converted=0;
    let converted_tmp=0;

    if(select1=='c'){
      if(select2=='c'){
        converted=input1.value
      }
      else if(select2=='f'){
        converted=(parseFloat(input1.value) * (9/5) + 32).toFixed(2)
      }
      else if(select2=='k'){
        converted=(parseFloat(input1.value) + 273.15).toFixed(2)
      }
      converted_tmp=input1.value
    }
    else if(select1=='f'){
      if(select2=='f'){
        converted=input1.value
      }
      else if(select2=='c'){
        converted=((parseFloat(input1.value) -32) * (5/9)).toFixed(2)
      }
      else if(select2=='k'){
        converted=((parseFloat(input1.value) -32) * (5/9) + 273.15).toFixed(2)
      }
      converted_tmp=((parseFloat(input1.value) -32) * (5/9)).toFixed(2)

    }
    else if(select1=='k'){
      if(select2=='k'){
        converted=input1.value
      }
      else if(select2=='c'){
        converted=(parseFloat(input1.value) - 273.15).toFixed(2)
      }
      else if(select2=='f'){
        converted=((parseFloat(input1.value) - 273.15) * (9/5) + 32).toFixed(2)
      }
      converted_tmp=(parseFloat(input1.value) - 273.15).toFixed(2)

    }

    setInput2Val(converted);

    changeTemp_termo(converted_tmp);
  }
  
  const checkUnit2= ()=>{
    let select1= document.querySelector('#selectZone1 select').value;
    let select2= document.querySelector('#selectZone2 select').value;
    let input2= document.querySelector('#selectZone2 input');

    let converted= 0
    let converted_tmp= 0

    if(select2=='c'){
      if(select1=='c'){
        converted=input2.value
      }
      else if(select1=='f'){
        converted=(parseFloat(input2.value) * (9/5) + 32).toFixed(2)
      }
      else if(select1=='k'){
        converted=(parseFloat(input2.value) + 273.15).toFixed(2)
      }
      converted_tmp=input2.value
    }
    else if(select2=='f'){
      if(select1=='f'){
        converted=input1.value
      }
      else if(select1=='c'){
        converted=((parseFloat(input2.value) -32) * (5/9)).toFixed(2)
      }
      else if(select1=='k'){
        converted=((parseFloat(input2.value) -32) * (5/9) + 273.15).toFixed(2)
      }
      converted_tmp=((parseFloat(input2.value) -32) * (5/9)).toFixed(2)

    }
    else if(select2=='k'){
      if(select1=='k'){
        converted=input2.value
      }
      else if(select1=='c'){
        converted=(parseFloat(input2.value) - 273.15).toFixed(2)
      }
      else if(select1=='f'){
        converted=((parseFloat(input2.value) - 273.15) * (9/5) + 32).toFixed(2)
      }
      converted_tmp=(parseFloat(input2.value) - 273.15).toFixed(2)

    }
    setInput1Val(converted);
    changeTemp_termo(converted);

  }

  function changeLiquor(){
    alert(1);
  }

  return (
    <div className="App">
      <h1 align="center">
        Younouss Temp converter
      </h1>

      <div className='container'>
        <div>
          <SelectZone 
            nomSelect={'selectZone1'} 
            onComponentChange={checkUnit1} 
            inputVal={input1} 
            inputChange={changeInput1}
          />

          <SelectZone 
            nomSelect={'selectZone2'} 
            onComponentChange={checkUnit2} 
            inputVal={input2} 
            inputChange={changeInput2}
            defaultUnit='f'
          />
        </div>

        <div>
          <Thermo
            temp={temp_termo}
            changeLiquide={changeLiquor}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
