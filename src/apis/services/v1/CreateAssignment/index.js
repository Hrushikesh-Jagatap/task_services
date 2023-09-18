const AssignData = require('@models/Assignment');

// Service function to create a new Assign
const createAssign = async (assignData) => {
    try {
      const newAssign = await AssignData.create(assignData);
      return newAssign;
    } catch (error) {
      throw new Error('Failed to create Assignment');
    }
  };

module.exports = {
  createAssign
};
