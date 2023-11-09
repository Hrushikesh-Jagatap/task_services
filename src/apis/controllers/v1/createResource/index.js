const ResourceService = require('@services/v1/createResource');
const { HttpResponseHandler } = require('intelli-utility');

// POST // create resource
const createResource = async (req, res, next) => {

  try {

    const resourceData = req.body;

    const createdResource = await ResourceService.createResource(resourceData);

    if (!createdResource) {
      return HttpResponseHandler.success(req, res, createdResource);
    }

    return HttpResponseHandler.success(req, res, createdResource);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  createResource,
};
