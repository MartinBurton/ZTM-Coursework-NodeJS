const { send } = require('./request');
const { read } = require('./response');

function makeRequest(url, data) {
  send(url, data);
  return read(data);
};

const responseData = makeRequest('https://google.com', 'THE DATA');
console.log(responseData);