const QueData = require('@models/que');
const mongoose = require('mongoose');

// Service function to get a single batch by batchID
const getQueById = async (batchId) => {
  try {
    console.log(batchId);
   // const Que = await QueData.findOne({ _id: });
        const Que = await QueData.findOne({ _id: mongoose.Types.ObjectId(batchId) });

    return Que;
  } catch (error) {
    throw new Error('Failed to get Que');
  }
};

module.exports = {
  getQueById
}  