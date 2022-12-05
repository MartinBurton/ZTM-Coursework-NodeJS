// First import the package into the code with a request()
const axios = require('axios');

axios.get('https://www.martin-burton.com')
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log('All Done!');
  });
