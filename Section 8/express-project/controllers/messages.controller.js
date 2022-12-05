//const path = require('path');

function getMessages(req, res) {
  res.render('messages', {
    title: 'Messages to my Friends!',
    friend: 'Elon Musk'
  });
  //res.sendFile(path.join(__dirname, '..', 'public', 'images','skimountain.jpg'));  
  //res.send('<ul><li>Hello Albert!</li></ul>');
};

function postMessage(req, res) {
  console.log('updating messages...');
};

module.exports = {
  getMessages,
  postMessage
};