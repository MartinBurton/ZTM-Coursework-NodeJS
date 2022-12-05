const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Celebrity Output for race results
celebrity.on('race', (result) => {
  if (result === 'win') {
    console.log('RACE RESULT: WIN');
  } else if (result === 'loss') {
    console.log('RACE RESULT: LOSS');
  }
})

// Subscribe to the celebrity for Observer 1
celebrity.on('race', (result) => {
  if (result === 'win') {
    console.log('Congratulations you are the best!');
  } else if (result === 'loss') {
    console.log('Nevermind, better luck next time.');
  }
});

// Subscribe to the celebrity for Observer 2
celebrity.on('race', (result) => {
  if (result === 'win') {
    console.log('Boo I could have done better than that!');
  } else if (result === 'loss') {
    console.log('You suck!')
  }

});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'loss');
celebrity.emit('race', 'win');