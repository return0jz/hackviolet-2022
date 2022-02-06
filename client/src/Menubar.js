import { useAuth0 } from '@auth0/auth0-react';
import React, {Component} from 'react';
import "./Menubar.scss";

function Menubar() {
  return(
    <div id="menubar">
      <ul>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/submitgroup"> Submit your group </a></li>
      </ul>
    </div>
  )
}

export default Menubar;