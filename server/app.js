
const express = require('express');
const serveStatic = require('serve-static');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const {PORT, mongoUri} = require('./config');
const postsRoutes = require('./routes/api/posts')

const app = express()

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use(serveStatic(path.join(__dirname, '../docs')));
app.use('/api/posts', postsRoutes)

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB database Connnected...')).catch((err) => console.log(err))

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
