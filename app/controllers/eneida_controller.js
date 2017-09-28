var Eneida = require('../models/eneida');

exports.list = function(req, res) {
    res.send(Eneida.findAll());
};

exports.find_by_id = function(req, res) {
    res.send(Eneida.findById(req.params.id));
};

exports.save = function(req, res){
	res.send(Eneida.save(req.params.id, req.body.text));
}

exports.add = function(req, res){
	res.send(Eneida.add(req.body.text));
}

exports.remove = function(req, res){
	res.send(Eneida.remove(req.params.id));
}