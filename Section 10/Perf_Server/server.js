const express = require('express');

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
  res.send('Performance Example');
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send('Ding ding ding');
});

app.listen(3000);