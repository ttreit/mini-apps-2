const express = require('express');
const axios = require('axios');
const app = express();
const port = 7100;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(index.html)
})

app.get('/api/thirty', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then((thirtyDayData) => {
    console.log('30', thirtyDayData.data.bpi)
    res.json(thirtyDayData.data.bpi)
  })
  .catch((error) => {
    console.log(error);
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})





