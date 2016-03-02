// 1) require express module
var express = require('express');
var app = express();
var cfenv = require('cfenv');

app.use(express.static(__dirname + "/app"));
var appEnv = cfenv.getAppEnv();


app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("Server running on port " + appEnv.url);
});

