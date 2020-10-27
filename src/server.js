require('dotenv').config();
const express = require('express');
const cors = require('cors');
const encountersRouter = require('./routes/encounters');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/encounters', encountersRouter);

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(`mountLuck listening at http://localhost:${PORT}`)
);
