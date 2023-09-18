const ExamService = require('@root/src/apis/services/v1/UpdateExamById');


// update /exam
const updateExamById = async (req, res) => {

  const { teacherId } = req.body;
  try {
    const updateExam = await ExamService.updateExamById(req.params.id, req.body);
    const result = {
      data: null,
      success: false,
      error: 'Error in updating Exam',
    };
    if (!updateExam) {
      return result;
    }
    result.data = updateExam;
    result.success = true;
    result.error = 'success'

    return result;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  updateExamById,
};
