const REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return `encrypted ${data}`;
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
};

// Where possible use this code block as it clearly
// defines the module interface in one location
module.exports = {
  REQUEST_TIMEOUT,
  send,
};