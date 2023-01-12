import React, { useEffect, useState } from 'react'
import useCounter from '../../hooks/useCounter'
import './ForwardCounter.css'

const ForwardCounter = () => {

   const count = useCounter(true);
  return (
    <div className='counter'>{count}</div>
  )
}

export default ForwardCounter