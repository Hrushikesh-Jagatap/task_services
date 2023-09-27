const AssignService = require('@root/src/apis/services/v1/CreateAssignment');

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to create a new Assignment
const createAssign = async (req, res, next) => {
    try {
        const newAssign = await AssignService.createAssign(req.body);

        if (!newAssign) {
            return HttpResponseHandler.success(req, res, newAssign);
        }

        return HttpResponseHandler.success(req, res, newAssign);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createAssign
};
