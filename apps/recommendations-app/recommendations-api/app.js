'use strict';

var a127 = require('a127-magic');
var express = require('express');
var app = express();

// uncomment the following if you need to parse incoming form data
//app.use(express.bodyParser());

a127.init(function(config) {

  app.use(a127.middleware(config));

  app.listen(process.env.PORT || 10010);

  console.log('try this:\ncurl http://127.0.0.1:10010/customers/{customer_id || @me}/recommendations');
});
