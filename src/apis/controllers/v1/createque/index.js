const ExamService = require('@services/v1/createque');
const { HttpResponseHandler } = require('intelli-utility');


// POST // create exam
const createExam = async (req, res, next) => {

  try {

    const examData = req.body;

    const createdExam = await ExamService.createExam(examData);

    if (!createdExam) {
      return HttpResponseHandler.success(req, res, createdExam);
    }

    return HttpResponseHandler.success(req, res, createdExam);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  createExam,
};
