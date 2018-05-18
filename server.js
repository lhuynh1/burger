// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller');

var app = express(routes);

var PORT = process.env.PORT || 8080;

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded ({ extended: false }));

// app.use(routes);


app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });




