const TeacherService = require('@root/src/apis/services/v1/publishAssignById');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single teacher by userID
const publishAssignById = async (req, res, next) => {
    try {
        const Assign = await TeacherService.publishAssignById(req.params.Id);
        
        if (!Assign) {
            return HttpResponseHandler.success(req, res, Assign);
        }

        return HttpResponseHandler.success(req, res, Assign);

    } catch (error) {
        next(error)
    }

};

module.exports = {
    publishAssignById
}  