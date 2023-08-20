import React, { useState } from 'react'

function Basic_form_validation(){

    function logIn(e){
        e.preventDefault()
    }

    const [password, setPassword] = useState(false)
    const [userErr, setUsererr] = useState(false)

    function getUser(e){
        let item = e.target.value

        if(item.length < 3){
            setUsererr(true)
        }else{
            setUsererr(false)
        }
    }

    function getPassword(e){
        let item = e.target.value

        if(item.length<4){
            setPassword(true)
        }else{
            setPassword(false)
        }
    }

    return(
        <>
            <div className="App">
                <h1>
                    Log In
                </h1>
                <form onSubmit={logIn}>
                    <input type="text" placeholder='Enter username' onChange={getUser}/>{userErr?<span>Username is Not Valid</span>:""} <br /> <br />
                    <input type="password" placeholder='Enter your password' onChange={getPassword}/> {password?<span>Increase the length of Password</span>:""}<br /> <br />
                    <button type='submit'>Log In</button>
                </form>
            </div>
        </>
    )
}

export default Basic_form_validation