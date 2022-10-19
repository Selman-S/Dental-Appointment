import {
  Box,
  Button,
  Checkbox,

  FormControl,
  FormControlLabel,
  FormGroup,

  InputLabel,

  MenuItem,
  Select,
  TextareaAutosize,

  Typography,
} from '@mui/material'

import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';


import React from 'react'
import './treatment.scss'
import BookIcon from '@mui/icons-material/Book'
import HistoryIcon from '@mui/icons-material/History'
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption'


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#5616f5",
  '&:hover': {
    backgroundColor: "#7d28eb",
  },
}));




const Treatment = () => {
  const [age, setAge] = React.useState('')
  const [state, setState] = React.useState({
    dolgu: true,
    jason: false,
    antoine: false,
  })

  const handleChangeCheck = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }

  const { dolgu, beyazlatma, discekimi } = state

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <div className="treatment">
      <div className="header">
        <Typography variant="h5" gutterBottom sx={{}}>
          Alt 13
        </Typography>
        <div className="icons">
          <div className="icon">
            <HistoryIcon />
          </div>{' '}
          <div className="icon">
            <BookIcon />
          </div>{' '}
          <div className="icon">
            <EnhancedEncryptionIcon />
          </div>
        </div>
      </div>
      <div className="selct-treat">
        
        <FormControl variant="filled" sx={{ m: 1, width: '95%' }}>
          <InputLabel id="pedodonty">Pedodonty</InputLabel>
          <Select
            labelId="pedodonty"
            id="select-pedodonty"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Oral-Dental Care</MenuItem>
            <MenuItem value={20}>Childrens Prostheses</MenuItem>
            <MenuItem value={30}>Tooth Extraction</MenuItem>
            <MenuItem value={30}> Protective Applications </MenuItem>
            <MenuItem value={30}>Treatment Of Dental</MenuItem>
            <MenuItem value={30}>Canal Treatments</MenuItem>
            <MenuItem value={30}> Restorative Treatments</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="checkbox-treat">
        <Box sx={{ display: 'flex' }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dolgu}
                    onChange={handleChangeCheck}
                    name="dolgu"
                  />
                }
                label="Dolgu"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={beyazlatma}
                    onChange={handleChangeCheck}
                    name="beyazlatma"
                  />
                }
                label="Beyazlatma"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={discekimi}
                    onChange={handleChangeCheck}
                    name="discekimi"
                  />
                }
                label="Diş çekimi"
              />{' '}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dolgu}
                    onChange={handleChangeCheck}
                    name="dolgu"
                  />
                }
                label="Dolgu"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={beyazlatma}
                    onChange={handleChangeCheck}
                    name="beyazlatma"
                  />
                }
                label="Beyazlatma"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={discekimi}
                    onChange={handleChangeCheck}
                    name="discekimi"
                  />
                }
                label="Diş çekimi"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </div>
      <form className="textarea">
      <Typography variant="h5" component="legend">Doktorun Notu</Typography>
      <TextareaAutosize
  aria-label="minimum height"
  minRows={5}
 
  style={{ width: '100%',fontSize:'1rem' }}
/>
<Button  variant="contained" type="submit"  >Kaydet</Button>
      </form>
    </div>
  )
}

export default Treatment
