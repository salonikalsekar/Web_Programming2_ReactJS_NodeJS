var express = require('express');
const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");
// let morgan = require("morgan");
// let morganBody = require("morgan-body");
var paths = {};


// app.use(morgan('combined'));


//logging requested route and HTTP verb
app.use(function (req, res, next) {
    console.log("Current HTTP verb:" + req.method);
    console.log("Requested Route:" + req.originalUrl);

    next();
});

//Count at which a particular URL is requested
app.use(function (request, response, next) {

    if (!paths[request.path]) paths[request.path] = 0;
    paths[request.path]++;
    console.log("Count: of " + paths[request.path] + " are made to " + request.path);

    next();

});

//morganBody(app);

app.use(bodyParser.json());
configRoutes(app);

app.listen(4000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:4000");
}); 