const express = require('express');
const mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config');


const url = config.mongoUrl;
const connect = mongoose.connect(url,
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	}
);
connect.then((db) => {

    console.log('Connected correctly to server');

});

const app = express();
const promotions = require('./promoRouter');
const leaders = require('./leaderRouter');
const usersRouter = require('./users');
var authenticate = require('./authenticate');


var port = 8080;

app.use(passport.initialize());
app.use(passport.session());
app.use('/promotions',promotions);
app.use('/leaders',leaders);
app.use('/users', usersRouter);



app.listen(port,()=>{
	console.log('Server started on port '+port);
});
