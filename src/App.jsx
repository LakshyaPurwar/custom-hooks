import { useState } from 'react';
import './App.css';
import useConsoleLogger from './hooks/useConsoleLogger';
import { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  // const getSavedValue = ()=>{

  //   console.log("This function ain't running!");
  //   const savedValue = localStorage.getItem('input');
    
  //   console.log(savedValue+"  this is the savved value  ");
  
  //   if(savedValue)
  //   {
  //     return savedValue;
  //   }
  //   else{

  //     return "";
  //   }

  // }

  // const [input ,setInput] = useState(getSavedValue());

  // console.log(input+ "  apna waala");

 
  
  

  // useEffect(() => {
  //   localStorage.setItem('input',input);

  // }, [input])

  
  const [ input , setInput] = useLocalStorage('input','');
  useConsoleLogger(input);

  const handleChange = (e)=>{
      setInput(e.target.value);

  }
  return (
    <div className="App">

      <input value={input} className ='input' type="text" onChange={handleChange}/>

    </div>
  );
}

export default App;
