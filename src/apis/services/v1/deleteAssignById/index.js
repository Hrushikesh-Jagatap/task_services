const AssignData = require('@models/Assignment');

// Service function to delete a Deleted   Assignment by ID
const deleteAssignById = async (assignId) => {
  try {
    const deletedAssign = await AssignData.findByIdAndUpdate({ _id: assignId }, { isDeleted: true });
    return {};
  } catch (error) {
    throw new Error('Failed to delete Assign');
  }
};

module.exports = {
  deleteAssignById
}