const express = require('express');

const router = express.Router();

const getExamDetaialsByBatchIdController = require('@root/src/apis/controllers/v1/getExamDetaialsByBatchId')

router.get('/exam/batch/:Id', async (req, res, next) => {
    try {
        const result = await getExamDetaialsByBatchIdController.getExamDetailsByBatchId(req, res, next);
       
    } catch (error) {
        next(error);
    }
});

module.exports = router;
