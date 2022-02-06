import { useAuth0 } from '@auth0/auth0-react';
import React, {Component} from 'react';

function Titlescreen() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    console.log("Redirecting...");
    window.location.replace("/profile");
  }
  return (
    <div>
      <h1> Is it Safe? </h1>
      <p> </p>
      <LoginButton />
    </div>
  );
}

function LoginButton(){
  const { loginWithPopup } = useAuth0();
  return <button onClick={() => loginWithPopup()}>Log In</button>;
}

export default Titlescreen;