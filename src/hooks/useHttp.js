import React, { useState,useCallback } from 'react'
const useHttp = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const sendRequest =useCallback( async ( requestConfig , applyData ) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url,
        {
          method:requestConfig.method ? requestConfig.method:'GET',
          headers:requestConfig.header ? requestConfig.header:{},
          body:requestConfig.body ? JSON.stringify(requestConfig.body):null,
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      applyData(data);//Component provided transformation function. 

    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  },[])
  //Loading and error state and the requesting function
  //Should be accessible to the requesting component.
  //So that the component can make requests when required
  return {
   isLoading,
   error,
   sendRequest
    //Same property name as the variable name
  };

}

export default useHttp