import React, {useState, useEffect} from 'react'
import {CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Route, Routes, Link, useParams } from "react-router-dom";
import {Button, Box, Paper, Grid, Typography, CssBaseline, ThemeProvider} from '@mui/material';
import Container from '@mui/material/Container'
import theme from "/Users/valeria/development/phase-5/micelio/client/src/theme.js"
import App from "../App.css"

function Pillars({pillar, journal, nudge}) {

  return ( 
    <Card sx={{ maxWidth: 345, maxHeight: 900, margin: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pillar.image}
          alt={pillar.pillar_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {pillar.pillar_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {pillar.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to = {`/methods/${pillar.id}`}>
        <Button sx={{marginLeft: 15}} size="small" color="primary">
          Explore
        </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Pillars
        
    // <div>
    //     <Link to = {`/methods/${pillar.id}`}>
    //     <img src= {pillar.image} alt={pillar.pillar_name}></img>
    //     <h2>{pillar.pillar_name}</h2>
    //     <p>{pillar.description}</p>
    //     </Link>
    // </div>