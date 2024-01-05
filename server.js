const express = require('express');

const port = 3000;
var app = express();

var toyRouter = require('./api/toyRouter');

app.use(express.json());

app.use('/api/toys', toyRouter);

app.listen(port, function() {
    console.log('Server is listening on port ' + port);
});