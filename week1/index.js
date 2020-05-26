const express = require('express');

const app = express();
const dishes = require('./dishRouter');
const promotions = require('./promoRouter');
const leaders = require('./leaderRouter');

var port = 8080;

app.use('/dishes',dishes);
app.use('/promotions',promotions);
app.use('/leaders',leaders);

app.listen(port,()=>{
	console.log('Server started on port '+port);
});
