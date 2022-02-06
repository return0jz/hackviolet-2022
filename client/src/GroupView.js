import { useAuth0 } from '@auth0/auth0-react';
import React, {Component, useEffect, useState} from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { Button, Paper, Box } from '@mui/material';
import Menubar from './Menubar';
import './GroupView.scss'

function GroupView() {
  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(async () => {
    let req = await fetch('/api/get_group_info', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name
      })
    })
    let res = await req.json();
    console.log(res);
  })

  return(
    <div id="groupview">
      <Paper elevation={5}>
        <Menubar />
        <h1 id="groupName">{name}</h1>
        <ReviewButton name={name}/>
        <br />
      </Paper>
    </div>
  )
}

function ReviewButton(props) {
  return (
    <Box textAlign='center'>
      <Button variant="contained" onClick={() => {
        window.location.replace(`/review/${props.name}`)
      }}>
        Make a review.
      </Button>
    </Box>

  )
}

export default GroupView;