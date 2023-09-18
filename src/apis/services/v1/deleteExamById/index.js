const ExamData = require('@models/Exam');

// Service function to delete a Exam by ID
const deleteExamById = async (examId) => {
  try {

    const deletedExam = await ExamData.findByIdAndUpdate({ _id: examId }, { isDeleted: true });
    return {};
  } catch (error) {
    throw new Error('Failed to delete Exam');
  }
};

module.exports = {
  deleteExamById
}