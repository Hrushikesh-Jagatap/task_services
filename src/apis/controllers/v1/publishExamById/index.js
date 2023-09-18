
const ExamService = require('@root/src/apis/services/v1/publishExamById');

// Controller function to get a single teacher by userID
const publishExamById = async (req, res) => {
    try {
        const Exam = await ExamService.publishExamById(req.params.Id);
        const result = {
            data: null,
            success: false,
            error: 'Error in publishing Exam',
        }
        if (!Exam) {
            res.json(Exam);
        }
        result.data = Exam;
        result.success = true;
        result.error = 'Exam data published'
        res.status(200).json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    publishExamById
}  