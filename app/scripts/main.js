// main.js

'use strict';

var _ = require('underscore');
var names = ['blue t-shirt', 'yellow t-shirt', 'green t-shirt'];

_.each(names, function(n) {
	console.log(n);
});

//initialize the application

var todo = {};
todo.model = require('./models/Todo');
todo.view = require('./views/todoView');

var logfile = {};
logfile.model = require('./models/LogFile');
logfile.view = require('./views/logfileView');

m.module(document.getElementById("page-app"), {controller: todo.controller, view: todo.view});
m.module(document.getElementById("log-file"), {controller: logfile.controller, view: logfile.view});
