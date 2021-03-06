"use strict";

var express = require('express');

var app = express();

var path = require('path'); // app.use(express.static(path.join(__dirname+ '/client/build')));
// console.log(__dirname+ '/client/build')


app.use(express["static"](path.join(__dirname, 'client', 'build')));
app.get('/getNumber', function (req, res) {
  res.send({
    number: 23423
  });
}); // fetch('http://www.google.com')
// .then(r=>console.log(r))

var port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log("Listening on port ".concat(port));
});