const mongoose = require('mongoose');

const queschema = new mongoose.Schema({
  class:String,
  sub:String,
  lang:String,
  actual_ques:String,
  status:String,
  duration:String,
  studnetid:String,
  req_teacherid:[{
    teacherid:String,
    status:{
     type:String,
    default:"requested"
    },
    flag:{type:Boolean,default:true},
  }],
  review:String,
});

const que = mongoose.model('que', queschema);

module.exports = que;