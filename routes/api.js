var express = require('express');
var router = express.Router();
const speedTest = require('speedtest-net');
const test = speedTest({maxTime: 5000});

/* GET users listing. */
router.get('/download-speed/', function(req, res, next) {
  speedTest().on('downloadspeed', speed => {
    res.send('Download speed: ' + (speed * 125).toFixed(2) + ' KB/s');    
  }).on('error', err => {
    console.log('Download speed test error:');
    console.error(err);
    res.send('error');
  });
});

router.get('/upload-speed/', function(req, res, next) {
  speedTest().on('uploadspeed', speed => {
    res.send('Upload speed: ' + (speed * 125).toFixed(2) + ' KB/s');    
  }).on('error', err => {
    console.log('Upload speed test error:');
    console.error(err);
    res.send('error');
  });
});

router.get('/ip/', function(req, res, next) {
  speedTest().on('data', data => {
    res.send('IP: ' + data.client.ip);    
  }).on('error', err => {
    console.log('Ip test error:');
    console.error(err);
    res.send('error');
  });
});

router.get('/ping/', function(req, res, next) {
  speedTest().on('data', data => {
    res.send('Ping: ' + data.server.ping);    
  }).on('error', err => {
    console.log('Ping test error:');
    console.error(err);
    res.send('error');
  });
});

module.exports = router;
