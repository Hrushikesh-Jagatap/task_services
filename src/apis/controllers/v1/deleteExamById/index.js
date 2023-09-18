const ExamService = require('@root/src/apis/services/v1/deleteExamById');

// Controller function to delete a exam by ID
const deleteExamById = async (req, res) => {
    try {
        const deletedExam = await ExamService.deleteExamById(req.params.id);

        const result = {};

        if (!deletedExam) {
            return result;
        }

        return result;

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    deleteExamById
};
