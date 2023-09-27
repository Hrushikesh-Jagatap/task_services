const ExamService = require('@root/src/apis/services/v1/deleteExamById');

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to delete a exam by ID
const deleteExamById = async (req, res, next) => {
    try {
        const deletedExam = await ExamService.deleteExamById(req.params.id);

        const result = {};

        if (!deletedExam) {
            return HttpResponseHandler.success(req, res, result);
        }

        return HttpResponseHandler.success(req, res, result);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    deleteExamById
};
