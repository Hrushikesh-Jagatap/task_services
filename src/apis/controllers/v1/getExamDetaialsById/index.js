
const ExamService = require('@root/src/apis/services/v1/getExamDetaialsById')

// Controller function to get a single batch by  teacherid
const getExamDetailsId = async (req, res) => {
    try {
        const exam = await ExamService.getExamDetailsId(req.params.Id);
        const result = {
            data: null,
            success: false,
            error: 'Error in Finding  ExamDetails By Id',
        }
        if (!exam) {
            res.json(result);
        }
        result.data = exam;
        result.success = true;
        result.error = "Getting successfully By ExamId"
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getExamDetailsId
}  