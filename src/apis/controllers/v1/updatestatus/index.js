const statusService = require('@root/src/apis/services/v1/updatestatus');
const { HttpResponseHandler } = require('intelli-utility');

// update /exam
const updatesattusById = async (req, res, next) => {

  const { teacherId } = req.body;
  try {
    const updateQue = await statusService.updateStatusById(req.params.id, req.body);

    if (!updateQue) {
      return HttpResponseHandler.success(req, res, updateQue);
    }

    return HttpResponseHandler.success(req, res, updateQue);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  updatesattusById,
};
