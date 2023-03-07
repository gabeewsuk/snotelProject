const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const cors = require('cors');






app.use(express.static('public'));
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
  
    next();
  });


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});