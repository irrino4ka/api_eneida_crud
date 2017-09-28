var express = require('express');
var app = express();

const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000 );

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/eneida', require('./routes/api'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});