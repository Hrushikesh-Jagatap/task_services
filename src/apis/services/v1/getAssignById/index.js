const AssignData = require('@models/Assignment');

// Service function to get a single Assign by ID
const getAssignById = async (_id) => {
    try {
      const assign = await AssignData.findById(_id);
      return assign;
    } catch (error) {
      throw new Error('Failed to get Assignment');
    }
  };

module.exports = {
  getAssignById
}  