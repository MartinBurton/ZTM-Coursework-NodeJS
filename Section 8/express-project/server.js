const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

// Set up template views
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

// MIDDLEWARE
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} Time taken: ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Friends are Very Clever!',
    caption: 'Let\'s go skiing!'
  });
});

app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});