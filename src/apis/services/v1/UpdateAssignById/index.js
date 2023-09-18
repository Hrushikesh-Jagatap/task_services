const AssignData = require('@models/Assignment');

// Service function to update a Assign by ID
const updatedAssignById = async (assignId, assignData) => {
  try {
    const updatedAssign = await AssignData.findByIdAndUpdate(assignId, assignData, { new: true });
    return updatedAssign;
  } catch (error) {
    throw new Error('Failed to update Assignment');
  }
};

module.exports = {
  updatedAssignById,
};
