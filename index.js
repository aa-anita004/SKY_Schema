const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8080;

const app = express();

// Path of the folder where I will keep my static files like images, icons etc
app.use(express.static(path.join(__dirname, 'public')));

// We use bodyParser middle ware to understand json and url encoded reuquests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic hello World Route
app.get('/', (req, res) => {
  return res.send({ message: "Hello World!"});
}) 

// Here we start the server on the desired port
app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
});