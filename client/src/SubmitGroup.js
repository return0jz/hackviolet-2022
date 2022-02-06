import { useAuth0 } from '@auth0/auth0-react';
import React, {Component, useState } from 'react';
import Menubar from './Menubar';
import { Grid, TextField, Button } from '@mui/material';

function SubmitGroup() {
  let [group, email] = useState('');
  const {user, isLoading, isAuthenticated} = useAuth0();
  if(isLoading) {
    return ("Loading...");
  }
  if (isAuthenticated) {
    return (
      <div>
        <Menubar />
        <h1> Submit your group to be evaluated </h1>
        <h2> Why? </h2>
        <p> Allowing your group to be enables your team to improve the workplace ETCETERA PUT HERE </p>
        <Grid
          spacing={5}
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
                group = event.target.value;
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
                email = event.target.value;
              }}
            />
          </Grid>
          <Grid
            item>
            <Button variant="contained" onClick={() => {
              (async () => {
                const rawResponse = await fetch('/api/submitgroup', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({group: group, email: email})
                });
                window.location.replace(window.location.hostname);
              })()
            }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
  window.location.replace(window.location.hostname);
  return (<React.Fragment></React.Fragment>);
}

export default SubmitGroup;