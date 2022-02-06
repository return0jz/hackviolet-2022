import { useAuth0 } from '@auth0/auth0-react';
import React, {Component, useEffect, useState} from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { Button, Paper, Box } from '@mui/material';
import Menubar from './Menubar';
import './GroupView.scss'

function GroupView() {
  const [average, setAverage] = useState(5);
  const [exists, setExists] = useState(false);
  const [reviewSection, setReviewSection] = useState([]);
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
    let new_arr = [...reviewSection];
    if (res.length) {
      setExists(true);
    }
    if (res.length && res[0].comments.length) {
      res[0].comments.forEach((item, index) => {
        console.log(reviewSection)
        new_arr.push([<ReviewBox key={index} review={item}/>]);
        setAverage(average + item.rating);
      })
    }
    setReviewSection(new_arr);
    setAverage(average/(res[0].comments.length+1));
  }, [])
  if (exists) {
    return(
      <div id="groupview">
        <Paper elevation={5}>
          <Menubar />
          <h1 id="groupName">{name}</h1>
          <p id="average"> The average score is: {average} </p>
          <ReviewButton name={name}/>
          <br />
        </Paper>
        {reviewSection}
      </div>
    )
  }
  return <p> Page doesn't exist. </p>
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

function ReviewBox(props) {
  return (
    <Paper>
      <div class="boxy">
        <h3>{props.review.user_id}</h3>
        <p>{props.review.description}</p>
        <p>Score: {props.review.rating}</p>
      </div>
    </Paper>
  )
}

export default GroupView;