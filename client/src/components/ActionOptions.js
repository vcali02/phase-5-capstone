import React, {useState, useEffect} from 'react'
import ActionPrompt from './ActionPrompt'
import {useParams } from "react-router-dom";
import {CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button, Box, Paper, Grid, Typography, CssBaseline, ThemeProvider} from '@mui/material';
import Container from '@mui/material/Container'

function ActionOptions({action}) {
    
    /*------------------STATE--------------------*/
    //4.prompt state
    const [selectPrompt, setSelectPrompt] = useState(true)


    /*------------------STATE--------------------*/
    /*-------------------CRUD--------------------*/

   

    /*-------------------CRUD--------------------*/
    /*-------------------FUNK--------------------*/
    function handleClick(e){
        setSelectPrompt(!selectPrompt)
    }
    /*-------------------FUNK--------------------*/
    /*-----------------ITERATE-------------------*/
    
    //allows access to the nested array of action prompts
    console.log(Object.values(action))
    let prompt_arr = Object.values(action)
    console.log(prompt_arr)
    // console.log(Object.values(prompt_arr))
    
    const prompts = Object.values(prompt_arr[4])
    console.log(prompts)
    // const prompt = Object.values(prompts)
    
    // iterating through the desired array to access individual prompts
    const prompt = [...prompts].map((el, i) => {
        return <ActionPrompt key={i} prompt={el}/>
    })
    console.log(prompt)

    /*-----------------ITERATE-------------------*/


//     //randomizer function
//     const getRandomPrompt = () => {
//         return prompts[Math.floor(Math.random() * prompts.length)]
//     }

//     //randomizer state
//     const [randomPrompt, setRandomPrompt] = useState("")

//     //avoid infinite loop
//     useEffect((e) => {
//         setRandomPrompt(getRandomPrompt())
//     },[])

//     //handleRandomizer
//     const handleRandomizer = () => {
//         const oneRandomPrompt = getRandomPrompt()
//         setRandomPrompt(oneRandomPrompt)
//     }
// // handleRandomizer()



  return (
    <div>
        {selectPrompt ? (
    
    <Card sx={{ maxWidth: 900, maxHeight: 900, margin: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={action.image}
          alt={action.action_type}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {action.action_type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {action.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={(e) => handleClick(e)} sx={{marginLeft: 95}} size="small" color="primary">
          I pick...you!
        </Button>
      </CardActions>
    </Card>
     ) : (
    <Card>
        <CardContent onClick={(e) => handleClick(e)}>
            <Typography>{prompt}</Typography>
        </CardContent>
    </Card>
    )}
    </div>
  )
}

export default ActionOptions
    // <div>
    //     <h2>ActionOptions</h2>
    //     {selectPrompt ? (
    //         <div onClick={(e) => handleClick(e)}>
    //             {/* <img src={action.image}></img> */}
    //             <h3>{action.action_type}</h3>
    //             <p>{action.description}</p>
    //         </div>
    //     ) : (
    //         <div onClick={(e) => handleClick(e)}>
    //             {/* <ActionPrompt  prompts={prompts}/> */}
    //             {/*the single prompt prop passed to child*/}
    //             {prompt} 
    //         </div>
    //     )}
    // </div>