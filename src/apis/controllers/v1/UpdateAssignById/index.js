const TeacherService = require('@root/src/apis/services/v1/UpdateAssignById');
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to update a Assign by ID
const updateAssignById = async (req, res) => {
  try {
    const updatedAssign = await TeacherService.updatedAssignById(req.params.id, req.body);

    if (!updatedAssign) {
      return HttpResponseHandler.success(req, res, updatedAssign);
    }

    return HttpResponseHandler.success(req, res, updatedAssign);

  } catch (error) {
    next(error)
  }
};

module.exports = {
  updateAssignById,
};
