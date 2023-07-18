import React, {useContext} from 'react'
import Context from "./Context"
import {CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Typography} from '@mui/material';
import Container from '@mui/material/Container'



function User() {

    // const params = useParams()
    
    const {user, setUser} = useContext(Context)
    
    
    // useEffect(() => {
    //     fetch(`http://localhost:5555/users/${user.id}`)
    //     .then(res => res.json())
    //     .then(user => setUser(user))
    // },[user])  
    // console.log(user)
    
console.log(user)


  return (
    <>
    <Container sx={{marginLeft: "auto", marginTop: "auto"}}>
    <div className="page">
        
        {/* <p>{user.completed_prompts}</p> */}
         <Card sx={{ maxWidth: 1000, marginTop: "250px", marginBottom: "50px" }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="500"
                image={user.image}
                alt={user.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {user.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {user.bio}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    </Container> 
    </>
  )

}

export default User