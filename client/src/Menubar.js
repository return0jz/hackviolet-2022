import { useAuth0 } from '@auth0/auth0-react';
import React, {Component} from 'react';
import { AppBar, Toolbar, Button, TextField} from '@mui/material';
import "./Menubar.scss";

function Menubar() {
  return(
    <div id="menubar">
      <ul>
        <li><a href="/profile">Profile</a></li>
        <hr />
        <li><a href="/search"> Search for a group </a></li>
        <hr />
        <li><a href="/submitgroup"> Submit your group </a></li>
        <hr />
      </ul>
    </div>
  )
}

export default Menubar;