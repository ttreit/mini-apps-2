const express = require('express');
const axios = require('axios');
const app = express();
const port = 7100;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(index.html)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})





