const AssignData = require('@models/que');
const mongoose = require('mongoose');

// Service function to get a single batch by batchID
const getAssignByBatchId = async (batchId) => {
  try {
    console.log(batchId);
   // const Assign = await AssignData.findOne({ _id: });
        const Assign = await AssignData.findOne({ _id: mongoose.Types.ObjectId(batchId) });

    return Assign;
  } catch (error) {
    throw new Error('Failed to get Assignment By  BatchId');
  }
};

module.exports = {
  getAssignByBatchId
}  