//var express = require('express');
//var router = express.Router();
//var db = require('../db');
//
//router.get('/:object/:limit', function(req, res) {
//    var success = function(data) {
//        res.json(200, data);
//    };
//    db.get.list(req.params.object, null, req.params.limit, success);
//});
//
//router.get('/:object/single/:id', function(req, res) {
//    var id = req.params.id;
//    var success = function(data) {
//        res.json(200, data);
//    };
//    db.get.single(req.params.object, id, success);
//});
//
//router.post('/:object', function(req, res) {
//    var createSuccess = function(data) {
//        res.json(200, data);
//    };
//    var data = req.body;
//    db.save.insert(req.params.object, data, createSuccess);
//});
//
//router.post('/collection/:object', function(req, res) {
//    var createSuccess = function(data) {
//        res.json(200, data);
//    };
//    var data = req.body;
//    db.save.insertCollection(req.params.object, data, createSuccess);
//});
//
//module.exports = router;