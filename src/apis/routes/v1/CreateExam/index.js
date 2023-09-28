
const express = require('express');

const router = express.Router();

const CreateExamController = require('@controllers/v1/CreateExam');

router.post('/create-exam', async (req, res, next) => {
    // Extract the necessary data from the request body
    try {
        // const { batchName, startDate, endDate } = req.body;
        const result = await CreateExamController.createExam(req, res, next);
    
    } catch (error) {
        next(error);
    }
});

module.exports = router;

