var options = {
  clientId: "XXXXXX@bourses-XXXXXX.iam.gserviceaccount.com",
  email: "XXXXXXXXXXXX@XXXXXX-XXXXXXX.iam.gserviceaccount.com",
  key: "/FULL_PATH_TO/key/google-services-private-key.pem",
  ids: "ga:XXXXXXXXXX"
};

var und = require('underscore');
var gaApi = require('ga-api');
var url = require('url');
var express = require('express');
var app = express();
var querystring = require('querystring');


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/bourses/google-analytics', function (req, res) {

	var params = querystring.parse(url.parse(req.url).query);

    if ('dimensions' in params && 'metrics' in params && 'startDate' in params && 'endDate' in params) {
        
		gaApi(und.extend({}, options, {
			startDate: 	params['startDate'],
			endDate: 	params['endDate'],
			dimensions: params['dimensions'],
			metrics: 	params['metrics']
		}), function(err, data) {
			res.end(JSON.stringify(data));
		});

    } else {
		res.end('{ "error" : "Il manque des parametres" }');
	}


})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

})

