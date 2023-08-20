import "./App.css"
import React, {useState, useEffect} from "react";



function App() {

  const [count, setCount] = useState(100)
  const [data, setData] = useState(10)

  useEffect(()=>{
    console.log("Akash Chaudhary is Using UseEffect in Data State");
  }, [data])

  return (
    <>
      <div className="App">
        <h1>
          useEffect Hook
        </h1>
        <h2>
          {count}
        </h2>
        <h2>
          {data}
        </h2>
        <button onClick={()=>setCount(count + 1)}>
          Update Counter
        </button>
        <button onClick={()=>setData(data + 1)}>
          Update Data
        </button>
      </div>
    </>
  );
}

export default App;