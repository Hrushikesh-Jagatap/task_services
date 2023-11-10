
const ResourceService = require('@root/src/apis/services/v1/getResourceById')

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single resource by  Id
const getResourceDetailsById = async (req, res, next) => {
    try {
        const resource = await ResourceService.getResourceDetailsById(req.params.id);

        if (!resource) {
            return HttpResponseHandler.success(req, res, resource);
        }

        return HttpResponseHandler.success(req, res, resource);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getResourceDetailsById
}  