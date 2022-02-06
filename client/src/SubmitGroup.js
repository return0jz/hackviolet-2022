import { useAuth0 } from '@auth0/auth0-react';
import React, {Component, useState } from 'react';
import Menubar from './Menubar';
import { Grid, TextField, Button, Paper } from '@mui/material';
import './SubmitGroup.scss';

function SubmitGroup() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
    return (
      <div id="submitgroup">
        <Paper elevation={5}>
          <Menubar />
          <h1> Submit your group to be rated </h1>
          <h2> Why? </h2>
          <p> 
            Allowing your group to be enables your team to improve based on feedback from this website. 
            Doing this also contributes to pushing a safer atmosphere for the world overall, and will make
            your company more transparent and reputable.
          </p>
          <Grid
            spacing={3}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
            >
              <TextField
                required
                id="outlined-required"
                label="Your Group Name"
                defaultValue=""
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
            >
              <TextField
                required
                id="outlined-required"
                label="Email for verification."
                defaultValue=""
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Grid>
            <Grid
              item>
              <Button sx={{m:5}}variant="contained" onClick={() => {
                (async () => {
                  const rawResponse = await fetch('/api/submitgroup', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name: name, email: email})
                  }).then(() => {
                      console.log("Submitted.")
                      window.location.replace("/");
                    });
                })()
              }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
}

export default SubmitGroup;