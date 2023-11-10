const ResourceData = require('@models/Assignment');

// Service function to publish a Resource by ID
const publishResourceById = async (resourceId) => {
  try {
    let publishStatus = 'true';
    const resource = await ResourceData.findByIdAndUpdate({ _id: resourceId }, { publishStatus });
    return resource;
  } catch (error) {
    throw new Error('Failed to publish  Resource');
  }
};

module.exports = {
    publishResourceById
}  