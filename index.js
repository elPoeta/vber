const path = require('path');
const express = require('express');
const app = express();
const { PORT } = require('./config/keys');

require('./startUp/mongodb')();
require('./startUp/parser')(app);
require('./startUp/routes')(app);

//app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "src", "index.html"));
});

app.listen(PORT, error => {
  if (error) {
    console.log(`Error to start server ${error}`);
  }
  console.log(`Server started on port :: ${PORT}`);
})