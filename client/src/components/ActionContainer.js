import React, {useState, useEffect} from 'react'
import {Route, Routes, Link, useParams } from "react-router-dom";
import ActionPrompt from './ActionPrompt'
import Pillars from "./Pillars"
import {Button, Box, Paper, Grid, Typography, CssBaseline, ThemeProvider} from '@mui/material';
import Container from '@mui/material/Container'
import theme from "/Users/valeria/development/phase-5/micelio/client/src/theme.js"
import App from "../App.css"

//fetch to /pillar/params.pillar_id
//METHODS
function ActionContainer() {
    //want to use this wherever we want to access the incoming url parameter
    const params = useParams()
    console.log(params.pillar_id)
    /*------------------STATE--------------------*/
    const [nudges, setNudges] = useState([])
    const [journals, setJournals] = useState([])
    //3. nudge prompt state
    const [nudgePrompts, setNudgePrompts] = useState([])
    //3. journal prompt state
    const [journalPrompts, setJournalPrompts] = useState([])
//    //3. nudges state
//    const [nudges, setNudges] = useState([])
//    //3. journals state
//    const [journals, setJournals] = useState([])
    //3.
    const [userSelection, setUserSelection] = useState("")
   /*------------------STATE--------------------*/
   /*------------------DECONSTRUCT--------------------*/
//    const [n_action_type, n_description] = nudge
//    const [j_action_type, j_description] = journal
//    console.log(nudge)

    /*-------------------CRUD--------------------*/

    useEffect((e) => {
        fetch(`http://localhost:5555/pillars/${params.pillar_id}`)
        .then(res => res.json())
        .then(data => {
        setNudges(data.nudge)
        setJournals(data.journal)
    })
    },[])

    // //3. nudges fetch
    // useEffect((e) => {
    //     fetch('http://localhost:5555/nudges')
    //     .then(res => res.json())
    //     .then(nudges => setNudges(nudges))
    // }, [])

    // //3. journals fetch
    // useEffect((e) => {
    //     fetch('http://localhost:5555/journals')
    //     .then(res => res.json())
    //     .then(journals => setJournals(journals))
    // }, [])


    //3. nudge prompts fetch
    // useEffect((e) => {
    //     fetch('http://localhost:5555/nudge_prompts')
    //     .then(res => res.json())
    //     .then(nudgePrompts => setNudgePrompts(nudgePrompts))
    // }, [])

    //3. journal prompts fetch
    // useEffect((e) => {
    //     fetch('http://localhost:5555/journal_prompts')
    //     .then(res => res.json())
    //     .then(journalPrompts => setJournalPrompts(journalPrompts))
    // }, [])

    /*-------------------CRUD--------------------*/
    /*------------------CONST--------------------*/
    // const nudge_prompts = [...nudgePrompts].map(el => {
    //     return <ActionPrompt key = {el.id} nudge_prompt={el}/>
    // })

    const j = [...journals].map(el => {
        return <ActionPrompt key={el.id} prompt={el} />
    })
        
     //3. mapping through journal and nudge (which have been deconstructed from pillars) to access nested data
    const n = [...nudges].map(el => {
        return <ActionPrompt key={el.id} prompt={el}/>
    })

    /*------------------CONST--------------------*/
            

    
  return (    
    <div>
        <h1>Action Container</h1>
        {j}
        {n}
        {/* <p>{n.action_type}</p>
        <img src={n.image} alt ={n.action_type}></img>
        <h2>{n.action_type}</h2>
        <p>{n.description}</p>
                */}
        {/* <img src={j.image} alt ={j.action_type}></img>
        <h2>{j.action_type}</h2>
        <p>{j.description}</p>  */}
    </div>      
  )
}

export default ActionContainer


// <Container>
// <Grid container spacing={5}>
//     <Grid item xs={6}>
//         <Paper elevation={6} >
//             <p>{pillar.journal.action_type}</p>
//             <img src={nudges.image} alt ={nudges.action_type}></img>
//             <h2>{nudges.action_type}</h2>
//             <p>{nudges.description}</p>
//             {nudge_prompts}
//         </Paper>
//         <Paper elevation={6} >
//             <img src={journals.image} alt ={journals.action_type}></img>
//             <h2>{journals.action_type}</h2>
//             <p>{journals.description}</p>
//         </Paper>
//     </Grid>
// </Grid>
// </Container>