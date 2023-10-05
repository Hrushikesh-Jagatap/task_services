const ExamService = require('@root/src/apis/services/v1/deleteAssignById');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to delete a teacher by ID
const deleteAssignById = async (req, res) => {
    try {
        const deletedAssign = await ExamService.deleteAssignById(req.params.id);

        const result = {};
        if (!deletedAssign) {
            return HttpResponseHandler.success(req, res, result);
        }

        return HttpResponseHandler.success(req, res, result);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    deleteAssignById
};
