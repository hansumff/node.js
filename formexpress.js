// form express

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

app.all('/', function (req, res) {
	res.send(req.body.title + req.body.text);
})

app.listen(3000);