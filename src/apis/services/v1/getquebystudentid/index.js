const QueData = require('@models/que');
const mongoose = require('mongoose');

// Service function to get a single batch by batchID
const getquebystudentid = async (studnetids) => {
  try {
    console.log(studnetids);
   // const Assign = await AssignData.findOne({ _id: });
        const Que = await QueData.find({ studnetid: studnetids });

    return Que;
  } catch (error) {
    throw new Error('Failed to get Assignment By  BatchId');
  }
};

module.exports = {
  getquebystudentid
}  