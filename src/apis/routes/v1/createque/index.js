
const express = require('express');

const router = express.Router();

const CreatequeController = require('@controllers/v1/createque');

router.post('/create-que', async (req, res, next) => {
    // Extract the necessary data from the request body
    try {
        // const { batchName, startDate, endDate } = req.body;
        const result = await CreatequeController.createQue(req, res, next);
    
    } catch (error) {
        next(error);
    }
});

module.exports = router;

