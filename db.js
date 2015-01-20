//// https://github.com/shiki/kaiseki
//var moment = require('moment-timezone');
//// parse database
//var parse = require('kaiseki');
//var db = new parse("JSBJdPtSWQFxEg6jyX8UcNYh9dmXPPfqgSM2wZsu", "05ewwHMwWu88RAxIfKZ9XeaHLhUMz3sEfvHNDegA");
//
//var get = exports.get = {};
//get.list = function(object_name, name, limit, success) {
//    if(limit == undefined || limit == null) {
//        limit = 50;
//    }
//    var params = {
//        order: '-date',
//        limit: limit
//        //where: { dateComparator: {$gte: moment().subtract(20, 'd').format("X"), $lte: moment().format("X")} }
//    };
//
//    db.getObjects(object_name, params, function(err, res, body, suc){
//        success(body);
//    });
//};
//get.single = function(object_name, id, success) {
//    if(id.indexOf("today") != -1) {
//        var params = {
//            order: '-date',
//            limit: 1
//        };
//
//        db.getObjects(object_name, params, function(err, res, body, suc){
//            var date = body[0].date.substring(0, 10);
//            var today = moment().tz("America/Los_Angeles").format("MM-DD-YYYY");
//            if (today == date) {
//                success(body);
//            } else {
//                success(null);
//            }
//        });
//    } else {
//        db.getObject(object_name, id, function(err, res, body, suc){
//            success(body);
//        });
//    }
//};
//
//var save = exports.save = {};
//save.insert = function(object_name, object, success) {
//    // Add date to object
//    object.date = moment(object.date).tz("America/Los_Angeles").format("MM-DD-YYYY HH:mma z")
//        || moment().tz("America/Los_Angeles").format("MM-DD-YYYY HH:mma z");
//    object.dateComparator = +object.dateComparator || +moment().format('X');
//    db.createObject(object_name, object, function(err, res, body, suc) {
//        if(success) {
//            success(body);
//        }
//    });
//};
//save.insertCollection = function(object_name, objects, success) {
//    // Add date to objects
//    for(var i = 0; i <= objects.length - 1; i++) {
//        objects[i].date = objects[i].date || moment().tz("America/Los_Angeles").format("MM-DD-YYYY HH:mma z");
//        objects[i].dateComparator = +objects[i].dateComparator || +moment().format('X');
//    }
//    db.createObjects(object_name, objects, function(err, res, body, suc) {
//        if(success) {
//            success(body);
//        }
//    });
//};
//save.update = function(object_name, id, object, success) {
//    db.updateObject(object_name, id, object, function(err, res, body, suc) {
//        success(body);
//    });
//};
//
//var remove = exports.delete = {};
//remove.single = function(object_name, id, success) {
//    db.deleteObject(object_name, id, function(err, res, body, suc){
//        if(success){
//            success(body);
//        } else {
//            fail(body);
//        }
//    });
//};