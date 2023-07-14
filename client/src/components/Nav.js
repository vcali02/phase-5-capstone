import React, {useState} from 'react'
import { Link, useNavigate, NavLink, BrowserRouter } from "react-router-dom"
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Nav({updateUser, user}) {
    
    // const navigate = useNavigate();
    // function handleLogout() {
	// 	fetch("http://localhost:5555/logout").then((res) => {
	// 		if (res.ok){
	// 			updateUser(null);
	// 			navigate("/home");
	// 		}
	// 	});
	// }
    
    return (
        <nav>
                <NavLink exact to="/auth"> log in </NavLink>
				{/* { user ? 
					(<>
						<button onClick={handleLogout} className="button">
                        Log Out
						</button>
						<p style={{'margin-top': '8px'}}>Hello, {user.username}</p>
                        </>) : 
                        ''
                    }	 */}
                {/* <button onClick={handleLogout} className="button"> Log Out </button> */}
                <NavLink exact to = "/home"> log out</NavLink>
                <NavLink exact to = "/users"> profile </NavLink>
                <NavLink exact to = "/home"> micelio </NavLink>
                <NavLink exact to = "/about"> about</NavLink>
                <NavLink exact to = "/pillars"> pillars </NavLink>
                <NavLink exact to = "/methods"> methods </NavLink>
                <NavLink exact to = "/nudges">  </NavLink>
                <NavLink exact to = "/journals">  </NavLink>
                <NavLink exact to = "/growth"> growth </NavLink>
                <NavLink exact to = "/recommended"> recommended</NavLink>
            </nav>
        )
}

export default Nav


