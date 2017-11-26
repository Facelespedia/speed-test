const speedTest = require('speedtest-net');
const test = speedTest({maxTime: 5000});

speedTest().on('data', data => {
	console.log(data.client.ip)
});