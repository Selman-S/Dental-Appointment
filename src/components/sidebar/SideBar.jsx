import React, { useState } from 'react'
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
import DashboardIcon from '@mui/icons-material/Dashboard'
import BookIcon from '@mui/icons-material/Book'
import MedicationIcon from '@mui/icons-material/Medication'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import { BiPlusMedical } from 'react-icons/bi'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const height = isOpen ? '220px' : '75px'
  return (
    <div className="sidebar" style={{ width: height }}>
      <div
        className="false"
        style={{ display: isOpen ? 'none' : 'flex' }}
        onClick={() => setIsOpen(true)}
      >
        <ArrowForwardIosIcon />
      </div>
      <div
        className="true"
        style={{ display: isOpen ? 'flex' : 'none' }}
        onClick={() => setIsOpen(false)}
      >
        <ArrowBackIosIcon />
      </div>
      <div className="top">
        <h1 style={{ position: 'relative' }}>
          <BiPlusMedical
            size={20}
            style={{ position: 'absolute', top: '10px', left: '-20px' }}
          ></BiPlusMedical>
          m
          <span style={{ display: isOpen ? 'inline' : 'none' }}>
            edi<strong style={{ color: '#07c3f7' }}>kit</strong>
          </span>
        </h1>
      </div>
      <div className="center">
        <ul>
          <li>
            {' '}
            <DashboardIcon className="icon" /> <span  style={{ display: isOpen ? 'inline' : 'none' }}>Dashboard</span>
          </li>
          <li>
            {' '}
            <BookIcon className="icon" /> <span  style={{ display: isOpen ? 'inline' : 'none' }}>Appointments</span>
          </li>
          <li>
            {' '}
            <MedicationIcon className="icon" /> <span  style={{ display: isOpen ? 'inline' : 'none' }}>Doctors</span>
          </li>
          <li>
            {' '}
            <VolunteerActivismIcon className="icon" /> <span  style={{ display: isOpen ? 'inline' : 'none' }}>Paitents</span>
          </li>
          <li>
            {' '}
            <SettingsIcon className="icon" /> <span  style={{ display: isOpen ? 'inline' : 'none' }}>Settings</span>
          </li>
          <li>
            {' '}
            <LogoutIcon className="icon" /> <span  style={{ display: isOpen ? 'inline' : 'none' }}>Logout</span>
          </li>
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
