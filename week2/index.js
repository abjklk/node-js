const express = require('express');
const mongoose = require('mongoose');

const Promotions = require('./models/promotions');

const url = 'mongodb://localhost:27017/conFusion';
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

var port = 8080;

app.use('/promotions',promotions);
app.use('/leaders',leaders);

app.listen(port,()=>{
	console.log('Server started on port '+port);
});
