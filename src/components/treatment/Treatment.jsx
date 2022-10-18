import { Box, Checkbox, Divider, Drawer, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import React from 'react'
import './treatment.scss'
import BookIcon from '@mui/icons-material/Book';
import HistoryIcon from '@mui/icons-material/History';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';


const Treatment = () => {
  const [age, setAge] = React.useState('');  const [state, setState] = React.useState({
    dolgu: true,
    jason: false,
    antoine: false,
  });

  const handleChangeCheck = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="treatment">
      <div className="header">

          <Typography variant="h5"  gutterBottom sx={{}} >
      Alt 13
          </Typography>
          <div className="icons">

          <div className="icon">
            <HistoryIcon/>
          </div> <div className="icon">
            <BookIcon/>
          </div> <div className="icon">
            <EnhancedEncryptionIcon/>
          </div>
     
          </div>
      </div>
      <div className="selct-treat">
      <FormControl variant="filled" sx={{ m: 1,width:'95%'}} >
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
              <Checkbox checked={gilad} onChange={handleChangeCheck} name="dolgu" />
            }
            label="Dolgu"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChangeCheck} name="beyazlatma" />
            }
            label="Beyazlatma"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChangeCheck} name="discekimi" />
            }
            label="Diş çekimi"
          />  <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChangeCheck} name="dolgu" />
            }
            label="Dolgu"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChangeCheck} name="beyazlatma" />
            }
            label="Beyazlatma"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChangeCheck} name="discekimi" />
            }
            label="Diş çekimi"
          />
        </FormGroup>
     
      </FormControl>
      </Box>
      </div>
    </div>
  )
}

export default Treatment
