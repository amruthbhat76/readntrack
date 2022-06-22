const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const router = require('./routers/readEntryRouter');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/', router);
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

db.on('error', console.error.bind(console, 'Connection error'));

app.listen(port, () => console.log(`Listening on port ${port}`));