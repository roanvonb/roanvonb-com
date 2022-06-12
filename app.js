const express = require('express');
const app = express();
const port = 3000;

require('./prod')(app);

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})

app.get('/',(req,res) => {
    res.send("FET IN VOICE NERD");
})