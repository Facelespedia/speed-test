var express = require('express')
var router = express.Router()
const speedTest = require('speedtest-net')
const test = speedTest({maxTime: 5000})

router.get('/data/', function(req, res, next) {
  speedTest().on('data', data => {
    var _data = {
      ip: data.client.ip,
      sponsor: data.server.sponsor,
      location: data.server.location,
      country: data.server.country,
      isp: data.client.isp,
      ping: data.server.ping,
    }
    
    res.send(JSON.stringify(_data)) 
  }).on('error', err => {
    console.log('Server test error:')
    console.error(err)
    res.send('error')
  });
});

module.exports = router;
