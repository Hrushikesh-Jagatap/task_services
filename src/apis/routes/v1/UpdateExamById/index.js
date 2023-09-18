const express = require('express');

const router = express.Router();

const UpdateExamByIdController = require('@controllers/v1/UpdateExamById')

router.put('/exam/:id', async(req, res) => {
    try {
        const result = await UpdateExamByIdController.updateExamById(req, res);
        return res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    } 

});

module.exports = router;
