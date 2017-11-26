var express = require('express');
var router = express.Router();
const speedTest = require('speedtest-net');
const test = speedTest({maxTime: 5000});

/* GET users listing. */
router.get('/download-speed/', function(req, res, next) {
  speedTest().on('downloadspeed', speed => {
    res.send('Download speed: ' + (speed * 125).toFixed(2) + ' KB/s');    
  });
});

router.get('/upload-speed/', function(req, res, next) {
  speedTest().on('uploadspeed', speed => {
    res.send('Upload speed: ' + (speed * 125).toFixed(2) + ' KB/s');    
  });
});

router.get('/ip/', function(req, res, next) {
  speedTest().on('data', data => {
    res.send('IP: ' + data.client.ip);    
  });
});

router.get('/ping/', function(req, res, next) {
  speedTest().on('data', data => {
    res.send('Ping: ' + data.server.ping);    
  });
});

module.exports = router;
