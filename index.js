const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'jade');

app.use(express.static('public'));

require('./routes.js')(app);

app.listen(3000, function () {
  console.log('Virgin Spotlight listening in port 3000')
});

