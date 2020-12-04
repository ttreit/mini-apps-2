const express = require('express');
const app = express();
const port = 7100;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Bowling App listening on port ${port}`);
});