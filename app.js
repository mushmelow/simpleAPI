"use strict"

var express = require("express");
var app = express();
var port=  process.env.PORT||3000;
const mongoose = require('mongoose')
const bodyParser= require('body-parser');



//mongoose config
var dbUrl = 'mongodb://windowow:haotbon123@ds151180.mlab.com:51180/windowow'

//mongoose connection
mongoose.connect(dbUrl, { useNewUrlParser: true } ,(err) => {
	console.log('mongoose db connection, errors:', err)
})

var schema = new mongoose.Schema({ name: 'string', phone: 'string' });
var Customer = mongoose.model('Customer', schema);



app.get('/', function(req,res){
	Customer.find({}, (err, data) => {
     console.log(data)
	res.json(data)
})

	
});



app.listen(port, function(){
   console.log("app running on port "+ port);
});