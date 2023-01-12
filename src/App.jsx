import { useState } from 'react';
import './App.css';
import useConsoleLogger from './hooks/useConsoleLogger';
import { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import ForwardCounter from './components/ForwardCounter/ForwardCounter';
import BackwardCounter from './components/BackwardCounter/BackwardCounter';

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

  console.log("Adding this console.log in here should not be reflected in the main branch");
  const [ input , setInput] = useLocalStorage('input','');
  useConsoleLogger(input);

  const handleChange = (e)=>{
      setInput(e.target.value);

  }
  return (
    <div className="App">

      <input value={input} className ='input' type="text" onChange={handleChange}/>

      <ForwardCounter/>
      <BackwardCounter/>
      

    </div>
  );
}

export default App;
