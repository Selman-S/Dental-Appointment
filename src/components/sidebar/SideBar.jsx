import React from 'react'
import './sidebar.scss'
import {
  Grid,
  Paper,
  Typography,
  ListItem,
  ListItemAvatar,
  List,
  Drawer,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import MedicationIcon from '@mui/icons-material/Medication';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { BiPlusMedical } from 'react-icons/bi';




const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
  
        <Grid item xs={12} md={4}>
          <List>
            <ListItem sx={{ marginRight: '100px' }}>
              <BiPlusMedical size={20}></BiPlusMedical>
              <h1
                variant="h1"
                gutterBottom
                sx={{ fontWeight: '700', color: 'white', fontSize: '24px' }}
              >
              m<span>edi<strong style={{color:'#3beaf5'}}>kit</strong></span>
              </h1>
            </ListItem>
          </List>
        </Grid>
      </div>

      <div className="center">
        <ul>

          <li> <DashboardIcon className='icon'/> <span>Dashboard</span></li>
          <li> <BookIcon className='icon'/> <span>Appointments</span></li>
          <li> <MedicationIcon className='icon'/> <span>Doctors</span></li>
          <li> <VolunteerActivismIcon className='icon'/> <span>Paitents</span></li><li> <SettingsIcon className='icon'/> <span>Settings</span></li><li> <LogoutIcon className='icon' /> <span>Logout</span></li>
       
       
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
     
      </div>
    </div>
  )
}

export default SideBar
