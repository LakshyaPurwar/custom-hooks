import React, { useEffect, useState } from 'react'


const getSavedValue = (key , initialValue)=>{
    const savedValue = localStorage.getItem(key);
    if(savedValue)
    {
        return JSON.parse(savedValue);
    }
    return initialValue;
}

const useLocalStorage = (key , initialValue) => {
  //Exactly same as the use state , but the added functionality combined
  const [value , setValue] = useState(()=>{
    return getSavedValue(key , initialValue);
  });

  useEffect(()=>{
    localStorage.setItem( key, JSON.stringify(value));
} , [value])
  
    return [value , setValue];

    
}



export default useLocalStorage;