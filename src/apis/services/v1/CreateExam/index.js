
//  Exam model
const Exam = require('@models/Exam');

// Create multiple Exam
const createExam = async (examData) => {
  try {
    const createdExam = await Exam.create(examData);
    return createdExam;
  } catch (error) {
    throw new Error('Failed to create Exam');
  }
}

module.exports = {
  createExam,
};
