import React, { useEffect, useState } from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import About from "./About";
import Pillars from "./Pillars";
import ActionContainer from "./ActionContainer";
import ActionPrompt from "./ActionPrompt";
import Growth from "./Growth";
import RecContainer from "./RecContainer";
import Nav from "./Nav";

import {Button, Paper, Grid, Typography, CssBaseline, ThemeProvider} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container'
import theme from "/Users/valeria/development/phase-5/micelio/client/src/theme.js"

function App() {

/*------------------STATE--------------------*/
  //1. state of recommendations
  const [recs, setRecs] = useState([])

  //2. state of pillars
  const [pillars, setPillars] = useState([])

  //5. user state
  const [users, setUsers] = useState(null)
 
  
/*------------------STATE--------------------*/
/*-------------------CRUD--------------------*/
  //1. rec fetch
  useEffect((e) => {
    fetch('http://localhost:5555/recommendations')
    .then(res => res.json())
    //1st instruction post rendering js obj:
    //grab state recs then UPDATE the state to BE the recs obj
    .then(recs => setRecs(recs))
  }, [])

  //2. pillars fetch
  useEffect((e) => {
    fetch('http://localhost:5555/pillars')
    .then(res => res.json())
    .then(pillars => setPillars(pillars))
  }, [])
  // {useParams}
  // /pillars/${id}

/*-------------------CRUD--------------------*/
/*------------------CONST--------------------*/

    const pillars_map = [...pillars].map(el => {
      return <Pillars key={el.id } pillar={el} />
    })
/*------------------CONST--------------------*/
/*----------------FUNCTION-------------------*/
    //5. sign up/log in/log out
    function updateUser(users) {
      setUsers(users)
    }

/*----------------FUNCTION-------------------*/


//THINK ABOUT ROUTES AND WHERE THEY TAKE YOU!!!!
  return (
    <ThemeProvider theme={theme}>  
    <CssBaseline/>
      {/* <AppBar> */}
        <Nav/>
      {/* </AppBar> */}
      <Container>
      {/* <Grid container spacing={5}> */}
          <Routes>
            <Route path="/auth" element={<Auth updateUser={updateUser}/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/about" element={<About/>} />
            {/*2. passing pillar state to component*/}
            <Route path="/pillars" element={pillars_map}/>
            <Route path="/methods" element={<ActionContainer />} />
            <Route path="/methods" element={<ActionPrompt />} />
            <Route path="/growth" element={<Growth/>} />
            {/*1. passing rec state to component*/}
            <Route path="/recommended" element={<RecContainer recs={recs}/>} />
          </Routes> 
        {/* </Grid> */}
      </Container>
    </ThemeProvider>
  );


}

export default App;


/*-------------------DELIVERABLES--------------------*/

//1. make recommendations appear on the browser

//2. make pillars appear in the browser

//3. make methods/actions appear on the browser
//4. make action prompts appear on the browser
//5. sign up/log in/log out

{/* <NavLink exact to = "/home">micelio</NavLink>
<NavLink exact to = "/auth">welcome</NavLink>
<NavLink exact to = "/about">about</NavLink>
<NavLink exact to = "/pillars">pillars</NavLink>

<NavLink exact to = "/methods">methods</NavLink>
<NavLink exact to = "/growth">growth</NavLink>
<NavLink exact to = "/nudge">nudge</NavLink>
<NavLink exact to = "/journal">journal</NavLink>

<NavLink exact to = "/recommended">recommended</NavLink> */}