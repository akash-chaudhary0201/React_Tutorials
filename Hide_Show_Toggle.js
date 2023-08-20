import React, {useState} from 'react'

function Hide_Show_Toggle(){

    const [status, setStaus] = useState(true)

    return(
        <>
            <div className='App'>
                {
                    status? <h1>Akash Chaudharry</h1>:null
                }

                <button onClick={() =>setStaus(false)}>Hide Name</button> <br /> <br />
                <button onClick={() =>setStaus(true)}>Show Name</button>
                 <br /> <br />
                <button onClick={() =>setStaus(!status)}>Toggle</button>
            </div>
        </>
    )
}

export default Hide_Show_Toggle