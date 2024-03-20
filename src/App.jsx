import { useEffect, useState } from 'react'

import './App.css'
import { NumberGen } from './numbergen';

function App() {
  // const url = "https://20.244.56.144/numbers/fibo"
  // const [data,setData] = useState();
  // const fechdata =()=>{
  //   return fetch(url).then((res)=>res.json()).then((e)=> setData(e))
  // };
  // useEffect(()=>{
  //   fechdata();
  // },[]);

  return (
    <>
      {/* <h1>Data from API</h1>
      <center>
        {data.map((dataObj,ind)=>{
          return(
            <>
            <p key={ind}>{dataObj.numbers}</p>
            </>
          );
        })}
      </center> */}
      <NumberGen />
    </>
  )
}

export default App
