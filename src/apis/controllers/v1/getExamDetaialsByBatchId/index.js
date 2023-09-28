const ExamService = require('@root/src/apis/services/v1/getExamDetaialsByBatchId')
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single batch by  teacherid
const getExamDetailsByBatchId = async (req, res, next) => {
    try {

        const batch = await ExamService.getExamDetailsByBatchId(req.params.Id);

        if (!batch) {
            return HttpResponseHandler.success(req, res, batch);
        }

        return HttpResponseHandler.success(req, res, batch);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getExamDetailsByBatchId
}  