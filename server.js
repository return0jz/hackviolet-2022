const mongoose = require('mongoose');
const express = require('express'); 
require('dotenv').config()
const port = process.env.PORT || 5000;

function start() {
  const app = express();
  mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log(`Successfully connected to ${process.env.DATABASE_URL}`);
  });

  app.use(express.json());
  //routes
  app.post('/api/submitgroup', (req, res) => {
    console.log(req.body);
  })
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

start();