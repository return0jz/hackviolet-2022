import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Auth0Provider }  from '@auth0/auth0-react';
import Titlescreen from './Titlescreen';
import Profile from './Profile';
import SubmitGroup from './SubmitGroup';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Titlescreen />}/>
        <Route exact path="/profile" element={<Profile />}/>
        <Route exact path="/submitgroup" element={<SubmitGroup />}/>
        <Route path='*' element={<p>Page not found.</p>}> </Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);