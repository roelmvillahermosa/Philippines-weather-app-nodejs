var http = require('http');
var express = require('express');
var app = express();


app.get('/api/weather', function (req, res) {
const request = require('request');

let apiKey = 'e1f252b63d1f4f380816f318c9991b3b';
var zipcode = req.query.zipcode;
let countrycode = 'ph';
let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countrycode}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
  if(err){
    res.end('error:', error);
  } else {
    let weather = JSON.parse(body)
	let message = `
					Description: ${weather.description}
					Humidity: ${weather.main.humidity}
					Temperature: ${weather.main.temp} degrees celsius
					Wind Speed: ${weather.wind.speed}
					Town/City: ${weather.name}`;
	res.end(message);
  }
});
}).listen(8081, '0.0.0.0');



