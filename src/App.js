import React, { useEffect, useState } from 'react'
import "./App.css"
const App = () => {

  const [data,setData]=useState([])
  useEffect(()=>{
const getData=async ()=>{
  try{
    const response=await fetch ('https://api.thecatapi.com/v1/images/search?limit=10')
    const responseData=await response.json()
    setData(responseData)
  }
catch(error){
  console.error("Xeta bas verdi",error)
}
};
getData()
  },[])
  return (
    <div className='app'>
      <ul className='list'>
        {data.map((item,index)=>(
          <li key={index}>
            <img src={item.url}/>
            <h1>{item.id}</h1>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App