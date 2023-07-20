const express = require('express');
const app = express();
require('dotenv').config(); 
const cors = require('cors');
const PORT = process.env.PORT || 8000;
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./src/Routes/userRouter');
const eventsRouters = require('./src/Routes/eventsRouter');

app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use('/users', userRouter);
app.use('/events', eventsRouters);
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});

const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/crud-api';

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }) 
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
