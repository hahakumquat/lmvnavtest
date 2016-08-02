var credentials = require('./credentials');
var express = require('express');
var request = require('request');
var favicon = require('serve-favicon');

var router = express.Router();

var app = express();

app.use('/', express.static(__dirname + '/www'));

router.get('/token', function(req, res) {
    request.post(
        credentials.Authentication,
        { form : credentials.credentials },
        function(err, response, body) {
            if (!err && response.statusCode == 200) {
                res.send(body);
            }
        }
    );
});

// app.use(favicon(__dirname + '/www/images/favicon.ico'));

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Server listening on port ' + server.address().port);
});
