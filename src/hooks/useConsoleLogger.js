import { useEffect } from 'react'

const useConsoleLogger = (value) => {
  
    useEffect(() => {
      
        console.log(value+ "  is the new value");
    
    //   return () => {
    //     console.clear();
    //   }
    }, [value])
    
}

export default useConsoleLogger;