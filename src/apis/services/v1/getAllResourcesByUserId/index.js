const Resource = require('@models/Resources');

const getAllResources = async (userId) => {
  try {
    const resources = await Resource.find({ userId });
    return resources;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllResources
};
