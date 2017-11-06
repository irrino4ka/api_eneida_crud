var express = require('express');
var app = express();
var cors = require('cors');

const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000 );

app.use(bodyParser.json());
app.use(cors());

app.use('/api/patients', require('./routes/api'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});