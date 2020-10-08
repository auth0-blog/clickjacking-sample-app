const express = require('express');
var cors = require('cors');
const port = 4000;

const app = express();

app.use(cors());

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, () => console.log(`Attacker server listening at localhost:${port}`));