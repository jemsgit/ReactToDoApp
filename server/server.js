var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');
var express = require('express');

var app = new express();
var port = 3000;

console.log(config)

var compiler = webpack(config);

console.log(compiler)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
    console.log(__dirname)
    res.sendFile(__dirname + '/index.html');
    res.end();
});

//app.listen(port, function(error) {
    //if (error) {
      //  console.error(error);
    //} else {
    //    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
   // }
//});