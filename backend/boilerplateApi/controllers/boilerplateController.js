'use strick';
var path = require('path');


var mongoose = require('mongoose');
var Task = mongoose.model('Places');

exports.list_all_places = function(req, res) {
  Task.find({}, function(err, task) {
    if (err){
      res.send(err);
    } 
    res.json(task);
  });
};

exports.create_a_place = function(req, res) {
  var newTask = new Task(req.body);
  newTask.save(function(err, task) {
    if (err){
      res.send(err);
    }
    res.json(task);
  });
};

exports.read_a_place = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err){
      res.send(err);
    }
    res.json(task);
  });
};

exports.update_a_place = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err){
      res.send(err);
    }
    res.json(task);
  });
};

exports.delete_a_task = function(req, res) {

  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err){
      res.send(err);
    }
    res.json({ message: 'Place successfully deleted' });
  });
};

exports.welcome_message = function (req, res) {
  // res.send('Places to see list');
  // console.log(path('../../../public/index.html'));
  // res.sendFile(path.join(__dirname,'/public/index.html'))
}