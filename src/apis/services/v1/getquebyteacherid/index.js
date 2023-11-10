const QueData = require('@models/que');
const mongoose = require('mongoose');

// Service function to get a single batch by batchID
const getquebyteacherid = async (teacherids) => {
  try {
    console.log(teacherids);
  
        const Que = await QueData.find({ teacherid: teacherids });

    return Que;
  } catch (error) {
    throw new Error('Failed to get que by teacherid');
  }
};

module.exports = {
  getquebyteacherid
}  