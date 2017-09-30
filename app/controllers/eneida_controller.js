var Eneida = require('../models/eneida');

exports.list = function(req, res) {
    res.json(Eneida.findAll());
};

exports.find_by_id = function(req, res) {
    res.json(Eneida.findById(req.params.id));
};

exports.save = function(req, res){
	Eneida.save(req.params.id, req.body.text);
	res.statusCode = 204;
	res.end();
}

exports.add = function(req, res){
	var record = Eneida.add(req.body.text);
	res.statusCode = 201;
	res.json('{ "message": "The item was created successfully" }');
}

exports.remove = function(req, res){
	res.send(Eneida.remove(req.params.id));
	res.statusCode = 204;
	res.end();
}