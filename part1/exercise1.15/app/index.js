const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(req.headers['user-agent']);
  res.send(`Your user agent is: ${req.headers['user-agent']}.`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
