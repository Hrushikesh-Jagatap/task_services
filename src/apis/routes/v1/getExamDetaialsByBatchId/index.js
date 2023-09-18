const express = require('express');

const router = express.Router();

const getExamDetaialsByBatchIdController = require('@root/src/apis/controllers/v1/getExamDetaialsByBatchId')

router.get('/exam/batch/:Id', async (req, res) => {
    try {
        const result = await getExamDetaialsByBatchIdController.getExamDetailsByBatchId(req, res);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
