import { useAuth0 } from '@auth0/auth0-react';
import React, {Component, useState} from 'react';
import { Paper, Box, AppBar, Toolbar, Button, TextField} from '@mui/material';
import "./Menubar.scss";

function Search() {
  const [searchVal, setSearchVal] = useState('');
  return(
    <div id="menubar">
        <Paper sx={{m:10, p: 10}}>
            <Box textAlign="center">
                <TextField onChange={(event)=>setSearchVal(event.target.value)}id="outlined-basic" 
                label="Search for a group!" variant="outlined" onKeyPress={(ev)=>{
                  if (ev.key == "Enter") {
                    window.location.replace(`/groupview/${searchVal}`)
                  }
                }}/> 
            </Box>
        </Paper>
    </div>
  )
}

export default Search;