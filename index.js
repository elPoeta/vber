const express = require('express');
const app = express();
const config = require('./config/keys');

app.listen(config.PORT, error => {
  if (error) {
    console.log(`Error to start server ${error}`);
  }
  console.log(`Server started on port :: ${config.PORT}`);
})