import React, {useState} from 'react'

function If_Else() {

    const [loggedIn, setLoggedIn] = useState(true)


    return(
        <>
           <div className="App">
                {loggedIn?<h1>Hello Akash</h1>:<h1>Welcome Guest</h1>}
           </div>
        </>
    )

}

export default If_Else