const ResourceData = require('@models/Resources');

// Service function to update a Exam by ID
const updateResourceById = async (resourceId, resourceData) => {
  try {
    const updatedResource = await ResourceData.findByIdAndUpdate(resourceId, resourceData, { new: true });
    return updatedResource;
  } catch (error) {
    throw new Error('Failed to update Exam');
  }
};

module.exports = {
    updateResourceById,
};
