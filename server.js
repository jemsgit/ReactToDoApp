var webpack = require('webpack');
var config = require('./webpack.config.js');
var express = require('express');
var webpackDevMiddleware = require("webpack-dev-middleware");

var app = new express();
var port = 3000;

var compiler = webpack(config);
console.log(compiler);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    }
});