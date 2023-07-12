import React, {useState, useEffect} from 'react'
import {Route, Routes, Link, useParams } from "react-router-dom";
import ActionPrompt from './ActionPrompt'
import Pillars from "./Pillars"
import {Button, Box, Paper, Grid, Typography, CssBaseline, ThemeProvider} from '@mui/material';
import Container from '@mui/material/Container'
import theme from "/Users/valeria/development/phase-5/micelio/client/src/theme.js"
import App from "../App.css"


//METHODS
function ActionContainer() {
    /*------------------STATE--------------------*/
    //3. nudge prompt state
    const [nudgePrompts, setNudgePrompts] = useState([])
    //3. journal prompt state
    const [journalPrompts, setJournalPrompts] = useState([])

/*------------------STATE--------------------*/
   //3. nudges state
   const [nudges, setNudges] = useState([])
   //3. journals state
   const [journals, setJournals] = useState([])

/*-------------------CRUD--------------------*/

 //3. nudges fetch
 useEffect((e) => {
    fetch('http://localhost:5555/nudges')
    .then(res => res.json())
    .then(nudges => setNudges(nudges))
  }, [])

  //3. journals fetch
  useEffect((e) => {
    fetch('http://localhost:5555/journals')
    .then(res => res.json())
    .then(journals => setJournals(journals))
  }, [])


 //3. nudge prompts fetch
 useEffect((e) => {
    fetch('http://localhost:5555/nudge_prompts')
    .then(res => res.json())
    .then(nudgePrompts => setNudgePrompts(nudgePrompts))
  }, [])

  //3. journal prompts fetch
  useEffect((e) => {
    fetch('http://localhost:5555/journal_prompts')
    .then(res => res.json())
    .then(journalPrompts => setJournalPrompts(journalPrompts))
  }, [])

/*-------------------CRUD--------------------*/
const nudge_prompts = [...nudgePrompts].map(el => {
            return <ActionPrompt key = {el.id} nudge_prompt={el}/>
        })



    
  return (    
    <Container>
        <Grid container spacing={5}>
            <Grid item xs={6}>
                <Paper elevation={6} >
                    <img src={nudges.image} alt ={nudges.action_type}></img>
                    <h2>{nudges.action_type}</h2>
                    <p>{nudges.description}</p>
                    {/* {nudge_prompts} */}
                </Paper>
                <Paper elevation={6} >
                    <img src={journals.image} alt ={journals.action_type}></img>
                    <h2>{journals.action_type}</h2>
                    <p>{journals.description}</p>
                </Paper>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ActionContainer