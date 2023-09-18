
const ExamService = require('@root/src/apis/services/v1/getExamDetaialsByBatchId')

// Controller function to get a single batch by  teacherid
const getExamDetailsByBatchId = async (req, res) => {
    try {
        const batch = await ExamService.getExamDetailsByBatchId(req.params.Id);
        const result = {
            data: null,
            success: false,
            error: 'Error in Finding  ExamDetails By BatchId',
        }
        if (!batch) {
            res.json(result);
        }
        result.data = batch;
        result.success = true;
        result.error = 'Getting Exam Details By BtachId'
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getExamDetailsByBatchId
}  