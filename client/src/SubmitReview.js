import { useAuth0 } from '@auth0/auth0-react';
import React, {useState} from 'react';
import { Box,Paper, Button, TextField} from '@mui/material';
import Select from 'react-select';
import "./Menubar.scss";

const options = [
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
]

function SubmitReview() {
  const { name } = useParams();
  const [ratingNumber, setRatingNumber] = useState(0);
  return(
    <div id="submitreview">
      <Paper sx={{m:5, p: 10}}elevation={5}>
        <h1> Comment: </h1>
          <Box textAlign={"center"}>
            <TextField fullWidth/>
          </Box>
        <h1> Rating: </h1>
        <select onChange={(event) => {
          setRatingNumber(parseInt(event.target.value));
        }}name="Rating" id="rating_list">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <Box textAlign={"center"}>
          <Button variant="contained" onClick={() => {
            fetch('/api/review', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: {
                group: 
              }
            })
          }}>
            Submit
          </Button>
        </Box>
      </Paper>
    </div>
  )
}

export default SubmitReview;