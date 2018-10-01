// console.log('npmstart is working!');

var request = require('request');
var fs = require('fs');

console.log('Downloading image...');
request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', err => {
    throw err;
  })
  .on('response', response => {
    console.log('Status code:', response.statusMessage);
    console.log('Content type: ', response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpeg'))
  .on('end', () => {
    console.log('Download complete!');
  });