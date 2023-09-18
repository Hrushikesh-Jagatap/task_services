const ExamService = require('@services/v1/CreateExam');

// POST /exam
const createExam = async (req, res) => {
  
  try {

    const examData = req.body;
    const createdExam = await ExamService.createExam(examData);
    
    const result = {
      data: createdExam,
      success: true,
      message: 'Exam created successfully',
    };
    
    return res.status(201).json(result);

  } catch (error) {

    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createExam,
};
