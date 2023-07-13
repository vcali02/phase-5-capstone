import React, {useState, useEffect} from 'react'

function Methods() {
    /*------------------STATE--------------------*/
    //state for static method page
    const [nMethod, setN] = useState([])
    const [jMethod, setJ] = useState([])

    /*------------------STATE--------------------*/
    /*-------------------CRUD--------------------*/

    useEffect((e) => {
        fetch(`http://localhost:5555/nudges/1`)
        .then(res => res.json())
        .then(nMethod => setN(nMethod))
    },[])
    console.log(jMethod)

    useEffect((e) => {
        fetch(`http://localhost:5555/journals/1`)
        .then(res => res.json())
        .then(jMethod => setJ(jMethod))
    },[])
    console.log(jMethod)


    /*-------------------CRUD--------------------*/



  return (
    <div>
        <h1>methods</h1>
        <div>
            <img src={nMethod.image} alt={nMethod.action_type}></img>
            <h3>{nMethod.action_type}</h3>
            <p>{nMethod.description}</p>
        </div>
        <div>
            <img src={jMethod.image} alt={jMethod.action_type}></img>
            <h3>{jMethod.action_type}</h3>
            <p>{jMethod.description}</p>
        </div>
    </div>
  )
}

export default Methods