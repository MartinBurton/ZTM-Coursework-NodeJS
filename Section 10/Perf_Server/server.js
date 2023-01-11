const express = require('express');
const cluster = require('cluster');
const os = require('os');

const PORT = 3000;

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // Do nothing while delaying
    // Event loop is blocked
  };
};

app.get('/', (req, res) => {
  // These funcitons are blocking
  // JSON.stringify({}) => "{}"
  // JSON.parse("{}") => {}
  // [5,1,2,3,4].sort()
  res.send(`Performance Example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send(`Ding ding ding: ${process.pid}`);
});

console.log('Worker Process started');
app.listen(PORT, () => {
  console.log(`Worker is listening on ${PORT}`);
});

