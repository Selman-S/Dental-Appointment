import './navbar.scss'
import { Grid, Typography, ListItem, List, Box, Avatar } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import tooth from '../../assets/sd.png'



const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <Box sx={{display:'flex',alignItems:'center',justifyContent: 'center'}}>
        <div className="logo" style={{marginLeft:'20px',cursor:'pointer'}}  ><img src={tooth} alt="logo" style={{width:'60px',height:'65px'}} /></div>
        
        <Grid item xs={12} md={4}>
          <List  sx={{ cursor:'pointer' }}>
            <ListItem>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#ed7607', fontSize: '28px' }}
                >
                D
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#5616f5', fontSize: '28px' }}
                >
                ental
              </Typography>
            </ListItem>
          </List>
        </Grid>
                </Box>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon  sx={{ cursor:'pointer' }} />
        </div>

        <div className="items">
      
        <Typography variant="h6" gutterBottom  >
                      Dr.
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }} >
                      Lora Brown
                    </Typography>
     
          <div className="item">
            <NotificationsOutlinedIcon className="icon"  sx={{ cursor:'pointer' }} />
            <div className="counter">1</div>
          </div>
          
          <div className="item">
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" sx={{ width: 56, height: 56,marginLeft:1,cursor:'pointer' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
