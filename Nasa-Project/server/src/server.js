const PORT = process.env.PORT || 8000;

const http = require('http');
const mongoose = require('mongoose');
const { start } = require('repl');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');

const MONGO_URL = 'mongodb+srv://nasa-api:pTDsWekXKWTu@nasacluster.y3dgota.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.set('strictQuery', true);

// Database setup log
mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

// Database error catch
mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}...`);
  });
};

startServer();

