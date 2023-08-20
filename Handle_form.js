import React, {useState} from 'react'

function Handle_form (){
    function getformData(e) {
        e.preventDefault()
        console.log(name, movies, tnc);
    }

    const [name, setName] = useState("")
    const [tnc, setTnc] = useState(false)
    const [movies, setMovies] = useState("")

    function updateName(e) {
        setName(e.target.value)
    }

    function updateSelection(e){
        setMovies(e.target.value)
    }

    function checkBox(e){
        setTnc(e.target.checked)
    }

    return(
        <>
            <div className="App">
                <form onSubmit={getformData}>
                    <input type="text" placeholder='Enter Your Name' onChange={updateName} /> <br /> <br />
                    <select onChange={updateSelection}>
                        <option>
                            Select Option
                        </option>
                        <option>
                            Marvel
                        </option>
                        <option>
                            Bollywood
                        </option>
                        <option>
                            Tollywood
                        </option>
                    </select> <br /> <br />
                    <input type="checkbox" onChange={checkBox} /><span>Accept T & C</span> <br /> <br />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Handle_form