const queService = require('@root/src/apis/services/v1/updateque');
const { HttpResponseHandler } = require('intelli-utility');

// update /exam
const updatequeById = async (req, res, next) => {

  const { teacherId } = req.body;
  try {
    const updateQue = await queService.updateQueById(req.params.id, req.body);

    if (!updateQue) {
      return HttpResponseHandler.success(req, res, updateQue);
    }

    return HttpResponseHandler.success(req, res, updateQue);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  updatequeById,
};
