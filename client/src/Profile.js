import { useAuth0 } from '@auth0/auth0-react';
import React, {Component} from 'react';
import Menubar from './Menubar';
import { Avatar } from '@mui/material';

function Profile() {
  const { user, isLoading, isAuthenticated} = useAuth0();
  if(isLoading) {
    return ("Loading...");
  }
  if (isAuthenticated) {
    return (
      <div>
        <Menubar />
        <Avatar src={user.picture} alt={"Error loading avatar."} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.user_id}</p>
        <LogoutButton />
      </div>
    )
  }
  window.location.replace(window.location.hostname);
  return (<React.Fragment></React.Fragment>);
}

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  )
}

export default Profile;