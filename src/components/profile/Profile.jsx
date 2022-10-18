import { Avatar, Box, Button, Divider, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import './profil.scss'

const Profile = () => {
  return (
    <div className='container'>
      <Grid container spacing={2} >
                <Grid item xs={12} md={2}  >
                 <Avatar alt="Remy Sharp" sx={{margin:"auto",height:"80px", width:"80px",backgroundColor:'#f19730'}} src="https://t4.ftcdn.net/jpg/01/17/30/23/240_F_117302330_S62ttBijZ5hBLZwXDFep1zVf4erWNZyg.jpg"/> 
                

                </Grid>
                
                
                <Grid item xs={12} md={3} >
                    <Typography variant="h4" gutterBottom sx={{textAlign:"left",fontSize:"18px",fontWeight:"bold"}}>
                        Monica Wood
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{opacity:"0.4",textAlign:"left",fontSize:"14px"}}>
                        Pacient
                    </Typography>
                    <Button sx={{color:"black", backgroundColor:"#f8f9fb",borderRadius:"5px"}}>
                        Profile
                    </Button>
                </Grid>

                

                <Grid item xs={12} md={3} >
                    <Box>
                        <List >
                            <ListItem >
                            <Typography variant="h6" gutterBottom sx={{opacity:"0.4",fontSize:"15px"}}>
                        Yaş : 
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ml:1,fontSize:"15px"}}>
                        9
                    </Typography>
                            </ListItem>

                            <ListItem>
                            <Typography variant="h6" gutterBottom sx={{opacity:"0.4",fontSize:"15px"}}>
                        Sex : 
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ml:1,fontSize:"15px"}}>
                        Female
                    </Typography>
                            </ListItem>

                            <ListItem>
                            <Typography variant="h6" gutterBottom sx={{opacity:"0.4",fontSize:"15px"}}> 
                        Blood : 
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ml:1,fontSize:"15px"}}>
                        LW(A+)
                    </Typography>

                    
                            </ListItem>
                           </List>
                    </Box>
                </Grid>
                        <Divider orientation="vertical" variant="middle" flexItem />


                <Grid item xs={12} md={3} >
                    <Box>
                        <List>
                            <ListItem >
                            <Typography variant="h6" gutterBottom sx={{opacity:"0.4",fontSize:"15px"}}>
                        Tel : 
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ml:1,fontSize:"15px"}}>
                        949 565 4564
                    </Typography>
                            </ListItem>

                            <ListItem>
                            <Typography variant="h6" gutterBottom sx={{opacity:"0.4",fontSize:"15px"}}>
                        Address : 
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ml:1,fontSize:"15px"}}>
                        Female
                    </Typography>
                            </ListItem>

                            <ListItem>
                            <Typography variant="h6" gutterBottom sx={{opacity:"0.4",fontSize:"15px"}}>
                        Registration : 
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ml:1,fontSize:"15px"}}>
                        Yes
                    </Typography>
                            </ListItem>

                           </List>
                    </Box>
                </Grid>

            </Grid>
    </div>
  )
}

export default Profile