

import React, { useEffect, useState } from 'react';

const useCounter = (forward = true) => {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                
                if(forward === true)
                {
                    return prevCount + 1;
                }
                else{
                    return prevCount - 1;
                }
                
            });


        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return count;

}

export default useCounter;