import React, { useContext, useEffect, useState } from "react";
import {Route, Routes, useNavigate, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import About from "./About";
import Pillars from "./Pillars";
import ActionContainer from "./ActionContainer";
import NudgeAction from "./NudgeAction"
import Growth from "./Growth";
import RecContainer from "./RecContainer";
import Nav from "./Nav";
import Context from "./Context"
import Methods from "./Methods"
import ActionOptions from "./JournalAction"
import User from "./User"

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
  const [user, setUser] = useState(null)

  // //6. methods page
  // const [nudges, setNudges] = useState([])

  // const [journals, setJournals] = useState([])
 
/*------------------STATE--------------------*/
/*-------------------CRUD--------------------*/
useEffect(() => {
  getRecs()
  getPillars()
  authorizeUser()
  getUser()
}, [user])
  //1. rec fetch
  // useEffect((e) => {
  //   fetch('http://localhost:5555/recommendations')
  //   .then(res => res.json())
  //   //1st instruction post rendering js obj:
  //   //grab state recs then UPDATE the state to BE the recs obj
  //   .then(recs => setRecs(recs))
  // }, [])
  function getRecs(){
    fetch('http://localhost:5555/recommendations')
    .then(res => res.json())
    //1st instruction post rendering js obj:
    //grab state recs then UPDATE the state to BE the recs obj
    .then(recs => setRecs(recs))
  }

  //2. pillars fetch
  // useEffect((e) => {
  //   fetch('http://localhost:5555/pillars')
  //   .then(res => res.json())
  //   .then(pillars => setPillars(pillars))
  // }, [])
  function getPillars(){
    fetch('http://localhost:5555/pillars')
    .then(res => res.json())
    .then(pillars => setPillars(pillars))
  }
 console.log(pillars)
  //5. login/logout/signup
  // useEffect((e) => {
  //   fetch('http://localhost:5555/authorize_session')
  //   .then(res => {
  //       if(res.ok){
  //         res.json().then(data => {
  //           setUser(data)
  //         })
  //       } else {
  //         setUser(null)
  //       }
  //     })
  //   }, [user])  
  //   console.log(user)
  

  function authorizeUser(){
    if (user == null) {
      fetch('http://localhost:5555/authorize_session')
      .then(response => {
        if (response.ok) {
          response.json().then((user) => setUser(user))
        } else {
          setUser(null)
        }
      })
    }
  }

  // useEffect(() => {
  //   if (user && user.id) {
  //     fetch(`http://localhost:5555/users/${user.id}`)
  //       .then(res => res.json())
  //       .then(fetchedUser => {
  //         setUser(fetchedUser);
  //       });
  //   }
  // }, [user]);
  function getUser(){
    if (user && user.id) {
      fetch(`http://localhost:5555/users/${user.id}`)
        .then(res => res.json())
        .then(fetchedUser => {
          setUser(fetchedUser);
        });
    }
  }
  
  console.log(user);



  //6. methods page
  // useEffect((e) => {
  //     fetch(`http://localhost:5555/nudges`)
  //     .then(res => res.json())
  //     .then(nudges => setNudges(nudges))
  // },[])
  
  // useEffect((e) => {
  //     fetch("http://localhost:5555/journals")
  //     .then(res => res.json())
  //     .then(journals => setJournals(journals))
  // },[])  

/*-------------------CRUD--------------------*/
/*------------------CONST--------------------*/

  //2.map through pillars to access a single pillar and pass as props
  //note, accessing journal and nudge NOW as they are arrays
  const pillars_map = [...pillars].map(el => {
    return <Pillars key={el.id } pillar={el} journal={el.journal} nudge={el.nudge}/>
  })
    //can't console log the props here, but can in pillars component
    //6. methods page
  // const nudge = [...nudges].map(el => {
  //   return <Methods key={el.id} action={el} />
  // })
  // const journal = [...journals].map(el => {
  //   return <Methods key={el.id} action={el} />
  // })
    
/*------------------CONST--------------------*/
/*----------------FUNCTION-------------------*/

    //5. sign up/log in/log out
    function updateUser(user) {
      setUser(user)
    }


    const navigate = useNavigate();
    function handleLogout() {
		fetch("http://localhost:5555/logout").then((res) => {
			if (res.ok){
				updateUser(null);
				navigate("/home");
			}
		});
	}
/*----------------FUNCTION-------------------*/


//THINK ABOUT ROUTES AND WHERE THEY TAKE YOU!!!!
  return (
    // <ThemeProvider theme={theme}>  
    // <CssBaseline/>
    <Context.Provider value={{user, setUser}}>
      <div>
          <Nav updateUser={updateUser}/>
          <Routes>
            <Route path="/auth" element={<Auth updateUser={updateUser}/>} />
            <Route onClick={handleLogout} />
            <Route path='/users' element={<User setUser={setUser} updateUser={updateUser} user={user} />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            {/*2. passing pillar state to component*/}
            <Route path="/pillars" element={pillars_map}/>
            <Route path="/methods/:pillar_id" element={<ActionContainer/>} />
            <Route path="/methods/:pillar_id" element={<NudgeAction/>}/>
            {/* <Route path="/methods/:pillar_id" element={<JournalAction/>}/> */}
            <Route path="/methods" element={<Methods/>} />
            <Route path="/methods" element={<ActionOptions />} />
    
            <Route path="/growth" element={<Growth/>} />
            {/*1. passing rec state to component*/}
            <Route path="/recommended" element={<RecContainer recs={recs}/>} />
          </Routes> 
      </div>
    {/* // </ThemeProvider> */}
    </Context.Provider>
  );


}

export default App;


/*-------------------DELIVERABLES--------------------*/

//1. make recommendations appear on the browser

//2. make pillars appear in the browser

//3. make methods/actions appear on the browser
//4. make action prompts appear on the browser
//5. sign up/log in/log out
//6. methods page


{/* <NavLink exact to = "/home">micelio</NavLink>
<NavLink exact to = "/auth">welcome</NavLink>
<NavLink exact to = "/about">about</NavLink>
<NavLink exact to = "/pillars">pillars</NavLink>

<NavLink exact to = "/methods">methods</NavLink>
<NavLink exact to = "/growth">growth</NavLink>
<NavLink exact to = "/nudge">nudge</NavLink>
<NavLink exact to = "/journal">journal</NavLink>

<NavLink exact to = "/recommended">recommended</NavLink> */}



//state for nudges and journals to 