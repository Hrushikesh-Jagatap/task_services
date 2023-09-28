const express = require('express');

const router = express.Router();

const UpdateExamByIdController = require('@controllers/v1/UpdateExamById')

router.put('/exam/:id', async(req, res, next) => {
    try {
        const result = await UpdateExamByIdController.updateExamById(req, res, next);

    } catch (error) {
        next(error);
    } 

});

module.exports = router;
