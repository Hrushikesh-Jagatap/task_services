const mongoose = require('mongoose');

const queschema = new mongoose.Schema({
  class:String,
  sub:String,
  lang:String,
  actual_ques:String,
  status:String,
  duration:String,
  studnetid:String,
  teacherid:String,
  review:String,
});

const que = mongoose.model('que', queschema);

module.exports = que;