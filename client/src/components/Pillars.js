import React from 'react'
import {CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import {Button, Typography} from '@mui/material';


function Pillars({pillar, journal, nudge}) {

  return ( 
   <div >
        <Card sx={{maxWidth: 600, maxHeight: 300, margin: 1}}>
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
    </div>
          
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