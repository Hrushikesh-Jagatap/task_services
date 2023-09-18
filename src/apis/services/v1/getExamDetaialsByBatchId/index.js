const ExamData = require('@models/Exam');

// Service function to get a single teacher by ID
const getExamDetailsByBatchId = async (batchId) => {
    try {
        const exam = await ExamData.findOne({ batchId: batchId });
        return exam;
    } catch (error) {
        throw new Error('Failed to get exam Details By BatchId');
    }
};

module.exports = {
    getExamDetailsByBatchId
}  