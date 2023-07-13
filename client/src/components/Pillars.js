import React, {useState, useEffect} from 'react'
import ActionContainer from './ActionContainer'
import {Route, Routes, Link, useParams } from "react-router-dom";
import {Button, Box, Paper, Grid, Typography, CssBaseline, ThemeProvider} from '@mui/material';
import Container from '@mui/material/Container'
import theme from "/Users/valeria/development/phase-5/micelio/client/src/theme.js"
import App from "../App.css"

function Pillars({pillar, journal, nudge}) {

  return ( 
    <div>
        <Link to = {`/methods/${pillar.id}`}>
        <img src= {pillar.image} alt={pillar.pillar_name}></img>
        <h2>{pillar.pillar_name}</h2>
        <p>{pillar.description}</p>
        </Link>
    </div>
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


                        //     <Container>
                        //     <Grid container spacing={5}>
                        //         <Grid item xs={6}>
                        //             <Paper elevation={6} >
                                        
                        //                         <Link to = "/actions">
                        //                         <img className = "p-img" src= {pillar.image} alt={pillar.pillar_name}></img>
                        //                         <Box padding={1}>
                        //                         <h2>{pillar.pillar_name}</h2>
                        //                         <p>{pillar.description}</p>
                        //                         </Box>
                        //                         </Link>
                                                
                        //                         <ActionContainer nudge={nudge} journal={journal}/>
                                      
                        //         </Grid>
                        //     </Grid>
                        // </Container>