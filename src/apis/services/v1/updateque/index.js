const ExamData = require('@models/que');

// Service function to update a Exam by ID
const updateExamById = async (examId, examData) => {
  try {
    const updatedExam = await ExamData.findByIdAndUpdate(examId, examData, { new: true });
    return updatedExam;
  } catch (error) {
    throw new Error('Failed to update Exam');
  }
};

module.exports = {
    updateExamById,
};
