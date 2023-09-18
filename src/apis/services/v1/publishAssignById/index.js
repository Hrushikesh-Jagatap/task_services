const AssignData = require('@models/Assignment');

// Service function to publish a Assign  by ID
const publishAssignById = async (assignId) => {
  try {
    let publishStatus = 'true';
    const assign = await AssignData.findByIdAndUpdate({ _id: assignId }, { publishStatus });
    return assign;
  } catch (error) {
    throw new Error('Failed to publish  AssignData');
  }
};

module.exports = {
  publishAssignById
}  