var express     = require('express');
var logfmt      = require('logfmt');
var app         = express();
var port        = Number(process.env.PORT || 5000);

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
        res.send('Hello World : PORT ' + port);
});

app.listen(port, function() {
        console.log('Listening on ' + port);
})