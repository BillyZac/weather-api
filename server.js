var express = require('express')
var app = express()
var unirest = require('unirest')

require('dotenv').config()

app.set('port', (process.env.PORT || 5000))

app.get('/:city_code', function(request, response) {

  var url = [
    'http://api.openweathermap.org/data/2.5/forecast/',
    'city?id=',
    request.params.city_code,
    '&APPID=',
    process.env.API_KEY,
    '&units=imperial'
  ].join('')

  unirest.get(url)
    .end(function(weatherResponse) {
      console.log(weatherResponse);
      response.json(weatherResponse)
    })
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})
