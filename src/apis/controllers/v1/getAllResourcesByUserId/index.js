const ResourceService = require('@root/src/apis/services/v1/getAllResourcesByUserId');

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a Assignment  by  Batch ID
const getAllResources = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        const resources = await ResourceService.getAllResources(userId);

        if (!resources) {
            return HttpResponseHandler.success(req, res, resources);
        }
        
        return HttpResponseHandler.success(req, res, resources);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllResources
}  