const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dino')
    .then(console.log('Connected to MongoDB'))
    .catch(err => console.error("Could not connect to MongoDB"));

const express = require('express');
const app = express();
const port = 3000;

require('./prod')(app);

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})

app.get('/',(req,res) => {
    res.send("You have");
})