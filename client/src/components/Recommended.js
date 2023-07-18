import React from 'react'
import {Typography} from '@mui/material';
import {CardActionArea, Link, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Recommended({rec}) { 
    
  return (
    <Card sx={{ maxWidth: 600, minHeight:325, margin: 5}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="600"
        image={rec.image}
        alt={rec.rec_type}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {rec.rec_type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {rec.blurb}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Link color="secondary" href={rec.rec_link} variant="button"  underline="hover">Check it out!</Link>
    </CardActions>
  </Card>
  )
}

export default Recommended