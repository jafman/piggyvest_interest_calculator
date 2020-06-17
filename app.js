const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const calculateRoute = require('./route/calculate');

app.use('/v1', calculateRoute);
 
 
port = 80
app.listen(port, function () {
  console.log(`Listening on port ${port}...`)
})

