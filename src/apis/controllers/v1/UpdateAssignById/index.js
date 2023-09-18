const TeacherService = require('@root/src/apis/services/v1/UpdateAssignById');

// Controller function to update a Assign by ID
const updateAssignById = async (req, res) => {
  try {
    const updatedAssign = await TeacherService.updatedAssignById(req.params.id, req.body);
    const result = {
      data: null,
      success: false,
      error: 'Error in updating Teacher',
    };
    if (!updatedAssign) {
      return result;
    }
    result.data = updatedAssign;
    result.success = true;
    return result;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  updateAssignById,
};
