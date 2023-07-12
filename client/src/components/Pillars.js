import React, {useState, useEffect} from 'react'
import ActionContainer from './ActionContainer'
import {Route, Routes, Link, useParams } from "react-router-dom";
import {Button, Box, Paper, Grid, Typography, CssBaseline, ThemeProvider} from '@mui/material';
import Container from '@mui/material/Container'
import theme from "/Users/valeria/development/phase-5/micelio/client/src/theme.js"
import App from "../App.css"

function Pillars({pillar}) {
/*------------------STATE--------------------*/
    // //3. nudges state
    // const [nudges, setNudges] = useState([])
    // //3. journals state
    // const [journals, setJournals] = useState([])

/*------------------STATE--------------------*/
    const params = useParams()
/*-------------------CRUD--------------------*/

//  //3. nudges fetch
//  useEffect((e) => {
//     fetch('http://localhost:5555/nudges')
//     .then(res => res.json())
//     .then(nudges => setNudges(nudges))
//   }, [])

  //3. journals fetch
//   useEffect((e) => {
//     fetch('http://localhost:5555/journals')
//     .then(res => res.json())
//     .then(journals => setJournals(journals))
//   }, [])

// console.log(journals)
/*-------------------CRUD--------------------*/
/*------------------CONST--------------------*/

    // const nudges_link = [...nudges].map(el => {
    //         return <ActionContainer key = {el.id} nudge={el}/>
    //     })
    // const journals_link = [...journals].map(el => {
    //     return <ActionContainer key = {el.id} journal={el}/>
    // })


/*------------------CONST--------------------*/

  return ( 
    <Container>
        <Grid container spacing={5}>
            <Grid item xs={6}>
                <Paper elevation={6} >
                    {/* <Typography variant="h5" > */}
                            <Link to = "/methods">
                            <img className = "p-img" src= {pillar.image} alt={pillar.pillar_name}></img>
                            <Box padding={1}>
                            <h2>{pillar.pillar_name}</h2>
                            <p>{pillar.description}</p>
                            </Box>
                            </Link>
                            
                    {/* </Typography> */}
                </Paper>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Pillars
        // <ActionContainer nudges={nudges} journals={journals}/>

                            // <Link to = "/nudges">
                            //     {nudges_link}
                            // </Link>
                            // <Link to = "/journals">
                            //     {journals_link}
                            // </Link>