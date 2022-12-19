const express = require('express');
const app = express();
const date = new Date(Date.now())


app.get('/', (req, res) => {
  const date = new Date(Date.now())
  res.send('Hi there' + date);
});

app.listen(8080, () => {
  console.log('Docker Internal Port 8080', date);
})