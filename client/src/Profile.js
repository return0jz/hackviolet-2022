import { useAuth0 } from '@auth0/auth0-react';
import React, {Component} from 'react';
import Menubar from './Menubar';
import { Avatar, Paper, Button } from '@mui/material';
import './Profile.scss'

function Profile() {
  const { user, isLoading, isAuthenticated} = useAuth0();
  if(isLoading) {
    return ("Loading...");
  }
  if (isAuthenticated) {
    return (
      <div id="profile">
        <Paper elevation={5}>
          <Menubar />
          <div id="containAvatar">
            <img src={user.picture} alt={"Error loading avatar."} />
          </div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.user_id}</p>
          <LogoutButton />
        </Paper>
      </div>
    )
  }
  window.location.replace("/");
  return (<React.Fragment></React.Fragment>);
}

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <Button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  )
}

export default Profile;