import React from 'react'
import {Button, Paper, Grid, Typography, CssBaseline, ThemeProvider} from '@mui/material';
import Container from '@mui/material/Container'
import theme from "/Users/valeria/development/phase-5/micelio/client/src/theme.js"
import App from "../App.css"
import {CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import HikingIcon from '@mui/icons-material/Hiking';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

function Recommended({rec}) { 
    
//     return (
//         <Card sx={{ maxWidth: 345 }}>
//         <CardActionArea>
//         <CardMedia
//             component="img"
//             height="140"
//             image={rec.image} 
//             alt={rec.rec_type}
//         />
//         <CardContent>
//             <Typography >
//             {rec.rec_link}
//             </Typography>
//             <Typography >
//             {rec.rec_type}
//             </Typography>
//             <Typography >
//             {rec.blurb}
//             </Typography>
//         </CardContent>
//         </CardActionArea>
//         <CardActions>
//         <Button size="medium" color="primary" alt="Mark as hiked">
//             <HikingIcon/> or <AddLocationAltOutlinedIcon/>
//         </Button>
//         </CardActions>
//     </Card>
//     );
// }


    
  return (
    // <Grid container ={2}>
    // <Grid item xs={6}>
    //     <Paper elevation={6} >
    <div>
            {/*1. import all the recommendation features*/}
            <img  src={rec.image} alt={rec.rec_type}></img>
            <p>{rec.rec_link}</p>
            <p>{rec.rec_type}</p>
            <p>{rec.blurb}</p>
    </div>
    //     </Paper>
    // </Grid>
    // </Grid>
  )
}

export default Recommended