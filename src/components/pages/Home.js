import React, { useState } from 'react'

const Home = () => {
    const [count,setCount]=useState(9)
   let handleIncrement =()=>{
        setCount(count+1)
    };
    let handleDecrement=()=>{
        setCount(count-1)
    }
  return (
    <div>

    <h1>{count}</h1>
    <div className='d-flex'>
        <btn className="btn btn-danger" onClick={handleIncrement}>+</btn>
        <btn className="btn btn-primary" onClick={handleDecrement}>-</btn>
    </div>
    </div>
  )
}

export default Home