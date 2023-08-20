import React, {useState} from 'react'

function Input() {

    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
  
  
    function getData(value){
      setData(
        value.target.value, 
        setPrint(false)
      )
    }
  
    return (
      <>
      <div className="App">
        <h1>
          Enter Your Password
        </h1>
        <input type="password" onChange={getData}/>
        <button onClick={() => setPrint(true)} style={{margin:"20px"}}>Show Password</button>
        {
          print?
          <h2>
            {data}
          </h2>
          :null
        }
      </div>
      </>
    );
  }

export default Input