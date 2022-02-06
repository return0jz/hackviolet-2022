const mongoose = require('mongoose');
mongoose.set('debug', true);
const express = require('express'); 
var email_validator = require("email-validator");
require('dotenv').config()
const port = process.env.PORT || 5000;

const groupSchema = new mongoose.Schema({
  name: String,
  email: String,
  comments: [{
    user_id: String,
    description: String,
    rating: Number
  }]
});

const Group = mongoose.model('Group', groupSchema);
const app = express();

function routes() {
  // submitting group
  app.post('/api/submitgroup', (req, res) => {
    (async function() {
      let query = await Group.find({name: req.body.name}).exec();
      if (!query.length && (req.body?.name?.length > 3) && (req.body?.email?.length > 3)) {
        console.log("GOOD VALIDATED")
        const new_group = new Group({
          name: req.body.name,
          email: req.body.email
        });
        await new_group.save();
      }
    })()
    res.send({joe: "mama"});
  });
  // get group info
  app.post('/api/get_group_info', (req, res) => {
    (async function() {
      let query = await Group.find({name: req.body.name});
      console.log(query);
      res.send(query);
    })()
  });
}

function start() {
  mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log(`Successfully connected to ${process.env.DATABASE_URL}`);
  });

  app.use(express.json());
  routes(app)
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

start();