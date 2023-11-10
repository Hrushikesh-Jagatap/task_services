
//  Exam model
const Que = require('@models/que');

// Create multiple Exam
const createQue = async (queData) => {
  try {
    const createdQue = await Que.create(queData);
    return createdQue;
  } catch (error) {
    throw new Error('Failed to create Exam');
  }
}

module.exports = {
  createQue,
};
