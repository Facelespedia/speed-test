const speedTest = require('speedtest-net');
const test = speedTest({maxTime: 5000});

require('speedtest-net')().on('data', data => {
  console.log(data.speeds.download);
  console.log(data.speeds.upload);
  console.log(data.speeds.originalDownload);
  console.log(data.speeds.originalUpload);
  console.log(data.client.ip);
  console.log(data.client.isp);
  console.log(data.client.isprating);
  console.log(data.client.rating);
  console.log(data.client.ispdlavg);
  console.log(data.client.ispulavg);
});