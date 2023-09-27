const ExamService = require('@root/src/apis/services/v1/publishExamById');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single teacher by userID
const publishExamById = async (req, res, next) => {
    try {
        const Exam = await ExamService.publishExamById(req.params.Id);

        if (!Exam) {
            return HttpResponseHandler.success(req, res, Exam);
        }

        return HttpResponseHandler.success(req, res, Exam);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    publishExamById
}  