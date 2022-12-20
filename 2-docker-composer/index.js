const express = require('express');
const app = express();



app.get('/', (req, res) => {
  const date = new Date(Date.now())
  res.send('Hi there' + date);
});

app.listen(8080, () => {
  const date = new Date(Date.now())
  console.log('Docker Internal Port 8080', date);
})