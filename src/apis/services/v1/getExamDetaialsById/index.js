const ExamData = require('@models/Exam');

// Service function to get a single teacher by ID
const getExamDetailsId = async (examId) => {
  try {
    const exam = await ExamData.findOne({ _id: examId });
    return exam;
  } catch (error) {
    throw new Error('Failed to get exam Details');
  }
};

module.exports = {
  getExamDetailsId
}  