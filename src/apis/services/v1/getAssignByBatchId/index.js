const AssignData = require('@models/Assignment');

// Service function to get a single batch by batchID
const getAssignByBatchId = async (batchId) => {
  try {
    const Assign = await AssignData.find({ batchId: batchId });
    return Assign;
  } catch (error) {
    throw new Error('Failed to get Assignment By  BatchId');
  }
};

module.exports = {
  getAssignByBatchId
}  