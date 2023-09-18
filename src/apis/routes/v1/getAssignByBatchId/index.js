const express = require('express');

const router = express.Router();

const getAssignByBatchIdController = require('@root/src/apis/controllers/v1/getAssignByBatchId')

router.get('/batch/:id',async(req, res) => {
    try {
        const result = await getAssignByBatchIdController.getAssignByBatchId(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }    
});

module.exports = router;
