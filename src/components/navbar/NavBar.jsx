import './navbar.scss'
import { Grid, Typography, ListItem, List, Box } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import tooth from '../../assets/logotooth.png'



const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <Box sx={{display:'flex',alignItems:'center',justifyContent: 'center'}}>
        <div className="logo" style={{backgroudColor:'#5616f5 '}}></div>
        <Grid item xs={12} md={4}>
          <List>
            <ListItem sx={{ marginRight: '100px' }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 'bold', color: 'orange', fontSize: '24px' }}
                >
                D
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 'bold', color: '#5616f5', fontSize: '24px' }}
                >
                ental
              </Typography>
            </ListItem>
          </List>
        </Grid>
                </Box>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className="icon" />
          </div>{' '}
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
