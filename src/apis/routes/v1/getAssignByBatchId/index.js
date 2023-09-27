const express = require('express');

const router = express.Router();

const getAssignByBatchIdController = require('@root/src/apis/controllers/v1/getAssignByBatchId')

router.get('/batch/:id',async(req, res, next) => {
    try {
        const result = await getAssignByBatchIdController.getAssignByBatchId(req, res, next);
       
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
