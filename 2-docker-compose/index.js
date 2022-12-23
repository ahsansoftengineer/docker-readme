const express = require('express');
const redis  = require('redis');
const app = express();
const client = redis.createClient({ 
  host:'redis-server', 
  port: 6379,
  password: ''
});
// const client = createClient()
// const client = createClient();
// {
// When You are using External Host
// host: 'https://my-redis-server.com'
// When using Docker Compose
//   host:'redis-server',
//   port: 6379,
// })
client.on('error', (err) => console.log('Redis Client', err));
app.get('/', async (req, res) => {
  const date = new Date(Date.now())
  console.log({ client })
  await client.connect();
  client.set('redis-key', 'Value Reciving from Redis Server');
  const redisValue = await client.get('redis-key');
  res.send(`
    <h1> Hello from Docker </h1>
    <h2> Date : ${date}</h2>
    <h3> Redis Value : ${'redisValue'} </h3>
  `);
  client.disconnect();
});

app.listen(8080, async () => {
  const date = new Date(Date.now())
  console.warn('Docker Internal Port 8080', date);
})