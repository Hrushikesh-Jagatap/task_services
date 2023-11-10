const queService = require('@root/src/apis/services/v1/updateque');
const { HttpResponseHandler } = require('intelli-utility');

// update /exam
const updatequeById = async (req, res, next) => {

  const { teacherId } = req.body;
  try {
    const updateExam = await queService.updateExamById(req.params.id, req.body);

    if (!updateExam) {
      return HttpResponseHandler.success(req, res, updateExam);
    }

    return HttpResponseHandler.success(req, res, updateExam);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  updatequeById,
};
