
const ExamService = require('@root/src/apis/services/v1/getExamDetaialsById')

const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single batch by  teacherid
const getExamDetailsId = async (req, res, next) => {
    try {
        const exam = await ExamService.getExamDetailsId(req.params.Id);

        if (!exam) {
            return HttpResponseHandler.success(req, res, exam);
        }

        return HttpResponseHandler.success(req, res, exam);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getExamDetailsId
}  