import { useAuth0 } from '@auth0/auth0-react';
import React, {Component} from 'react';
import {Paper, Button} from '@mui/material';
import './Titlescreen.scss'

function Titlescreen() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    console.log("Redirecting...");
    window.location.replace("/profile");
  }
  return (
    <div id="titlescreen">
      <Paper elevation={10} sx={{
        height: '100%',
        m: 20
      }}>
        <hr></hr>
        <h1> Is it Safe? </h1>
        <Paper elevation={3} sx={{
          m: 5,
          p: 10
        }}>
          <h2> Purpose: </h2>
          <p> 
            According to the Dublin Rape Crisis Center, 
            60% sexual harrassment victims faced it in their workplace.
            This concept website's purpose is to rate any sort of group 
            (whether it's a company, society, club, etc.) based on their 
            levels of safety and whether or not they allow discriminatory behavior
            among their members, and serves as a way to determine if it is feasible
            for women or other discriminated minorities to join.
          </p>
        <LoginButton />
        </Paper>
      </Paper>
    </div>
  );
}

function LoginButton(){
  const { loginWithPopup } = useAuth0();
  return <Button onClick={() => loginWithPopup()}>Log In to Get Started</Button>;
}

export default Titlescreen;