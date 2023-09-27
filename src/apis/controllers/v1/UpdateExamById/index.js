const ExamService = require('@root/src/apis/services/v1/UpdateExamById');
const { HttpResponseHandler } = require('intelli-utility');

// update /exam
const updateExamById = async (req, res, next) => {

  const { teacherId } = req.body;
  try {
    const updateExam = await ExamService.updateExamById(req.params.id, req.body);

    if (!updateExam) {
      return HttpResponseHandler.success(req, res, updateExam);
    }

    return HttpResponseHandler.success(req, res, updateExam);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateExamById,
};
