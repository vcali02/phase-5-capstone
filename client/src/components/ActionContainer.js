import React, {useContext, useState, useEffect} from 'react'
import {Route, Routes, Link, useParams } from "react-router-dom";
import ActionOptions from './ActionOptions'
import Pillars from "./Pillars"
import Context from "./Context"

import {Button, Box, Paper, Grid, Typography, CssBaseline, ThemeProvider} from '@mui/material';
import Container from '@mui/material/Container'
import theme from "/Users/valeria/development/phase-5/micelio/client/src/theme.js"
import App from "../App.css"

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
        fetch(`http://localhost:5555/pillars/${params.pillar_id}`)
        .then(res => res.json())
        .then(data => {
        setNudges(data.nudge)
        setJournals(data.journal)
    })
    },[user])

    /*-------------------CRUD--------------------*/
    /*------------------CONST--------------------*/
   

    //3. mapping through journal and nudge (which have been deconstructed from pillars) to access nested data
    const n = [...nudges].map(el => {
        return <ActionOptions key={el.id} action={el}/>
    })
    const j = [...journals].map(el => {
        return <ActionOptions key={el.id} action={el}/>
    })
        
   

    /*------------------CONST--------------------*/
            

    
  return (    
    <div>
        {/* <Link to = {`/actions/${pillar.id}`}> */}
        <h1>Action Container</h1>
        {n}
        {j}
        {/* </Link> */}
    </div>      
  )
}

export default ActionContainer
