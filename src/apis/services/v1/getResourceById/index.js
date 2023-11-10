const ResourceData = require('@models/Resources');

// Service function to get a single resource by Id
const getResourceDetailsById = async (resourceId) => {
  try {
    const resource = await ResourceData.findOne({ _id:  resourceId});
    return resource;
  } catch (error) {
    throw new Error('Failed to get resource Details');
  }
};

module.exports = {
    getResourceDetailsById
}  