const AssignService = require('@root/src/apis/services/v1/getAssignById');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single Assign by ID
const getAssignById = async (req, res, next) => {
    try {
        const assign = await AssignService.getAssignById(req.params.id.toString());

        if (!assign) {
            return HttpResponseHandler.success(req, res, assign);
        }

        return HttpResponseHandler.success(req, res, assign);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAssignById
}  