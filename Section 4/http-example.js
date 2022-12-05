const { get } = require('http');

get('http://www.google.com', (res) => {
  // This is an EventListener
  res.on('data', (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });
  // This is an EventListener
  res.on('end', () => {
    console.log('No more data');
  });
});
