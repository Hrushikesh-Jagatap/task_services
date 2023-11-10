//  Resource model
const Resource = require('@models/Resources');

// Create multiple Resources 
const createResource = async (resourceData) => {
  try {
    const createdResource = await Resource.create(resourceData);

    if (createdResource === null) {
      return ('Error while creating Resource');
    }
    return createdResource;
  } catch (error) {
    throw new Error('Failed to create resource ');
  }
}

module.exports = {
  createResource,
};
