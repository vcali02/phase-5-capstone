import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";

function Methods({nudge}) {
    const params = useParams()
/*------------------STATE--------------------*/
    const [nudges, setNudges] = useState([])

    // const [journals, setJournals] = useState([])
/*------------------STATE--------------------*/
/*-------------------CRUD--------------------*/
useEffect((e) => {
    fetch(`http://localhost:5555/nudges/${params.pillar_id}`)
    .then(res => res.json())
    .then(nudges => setNudges(nudges))
},[])

// useEffect((e) => {
//     fetch("http://localhost:5555/journals")
//     .then(res => res.json())
//     .then(journals => setJournals(journals))
// },[])


/*-------------------CRUD--------------------*/
/*-----------------ITERATE-------------------*/





/*-----------------ITERATE-------------------*/




  return (
    <div> <p>hi</p>
        {/* <div>
            <img src={nudge.image} alt={nudge.action_type}></img>
            <h3>{nudge.action_type}</h3>
            <p>{nudge.description}</p>
        </div> */}
        {/* <div>
            <img src={journals.image} alt={journals.action_type}></img>
            <h3>{journals.action_type}</h3>
            <p>{journals.description}</p>
        </div> */}
    </div>
  )
}

export default Methods