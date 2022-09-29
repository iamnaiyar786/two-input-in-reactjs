import React from 'react';
import { useState } from 'react';
import "./App.css";

const App =() =>{
    const[name, setName] = useState();
    const[fullname, setFullname]= useState();
    const[names,setNames]=useState();
    const[lastname, setlastname]=useState();
    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    const inputEventwo = (event)=> {
        setNames(event.target.value);
    }
    const submit = (event) =>{
        event.preventDefault();
        setFullname(name);
        setlastname(names);
    }
    return(
    <>
    
    <div className='main'>
    <form onSubmit={submit}>
        <h1> Hello {fullname} {lastname} </h1>
        <input type="text" placeholder='Enter Your Name' onChange={inputEvent} value={name} />
        <br />
        <input type="text" placeholder='Enter Your Last Name' onChange={inputEventwo} value={names} />
        <button type='submit'>Submit</button>
        </form>
    </div>
    
    </>
    );
}

export default App;