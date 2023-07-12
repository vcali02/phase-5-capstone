import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Home() {
  return (
      <Grid container spacing={5}>
        <Box sx={{
            display: "flex",
            alignItems: "center"
        }}>
        <h1>micelio</h1>
        <img></img>
        </Box>
        <Box sx={{
            display: "flex",
            alignItems: "center"
        }}>
        <img className="h-img"
        src="https://www.designboom.com/wp-content/uploads/2021/05/alison-pollack-mushroom-photography-designboom-fb.jpg" 
        alt="micelio">
        </img>
        </Box>
    </Grid>

  )
}

export default Home