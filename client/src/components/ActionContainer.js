import React, {useContext, useState, useEffect} from 'react'
import {useParams } from "react-router-dom";
import JournalAction from './JournalAction'
import NudgeAction from "./NudgeAction"
import Context from "./Context"

//fetch to /pillar/params.pillar_id
//METHODS
function ActionContainer({pillar}) {
    const {user, setUser} = useContext(Context)

    /*------------------STATE--------------------*/
    
    //3. nudge prompt state
    const [nudges, setNudges] = useState([])
    //3. journal prompt state
    const [journals, setJournals] = useState([])
    
    /*------------------STATE--------------------*/
    /*------------------PARAM--------------------*/
    
    //want to use this wherever we want to access the incoming url parameter
    const params = useParams()
    console.log(params.pillar_id)

    /*------------------PARAM--------------------*/
    /*-------------------CRUD--------------------*/

    useEffect((e) => {
        fetch(`/pillars/${params.pillar_id}`)
        .then(res => res.json())
        .then(data => {
        setNudges(data.nudge)
        setJournals(data.journal)
    })
    },[])

    /*-------------------CRUD--------------------*/
    /*------------------CONST--------------------*/
   

    //3. mapping through journal and nudge (which have been deconstructed from pillars) to access nested data
    const n = [...nudges].map(el => {
        return <NudgeAction key={el.id} action={el}/>
    })
    const j = [...journals].map(el => {
        return <JournalAction key={el.id} action={el}/>
    })
    
    
    console.log(nudges)
   

    /*------------------CONST--------------------*/
            

    
  return (    
    <div className="page">
        {n}
        {j}
    </div>      
  )
}

export default ActionContainer
