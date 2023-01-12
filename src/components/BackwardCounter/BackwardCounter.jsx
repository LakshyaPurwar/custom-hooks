import React, { useEffect, useState } from 'react'
import useCounter from '../../hooks/useCounter';
import './BackwardCounter.css'

function BackwardCounter() {

    const count = useCounter(false);
    return (
        <div className='counter'>{count}</div>
    );
}

export default BackwardCounter;