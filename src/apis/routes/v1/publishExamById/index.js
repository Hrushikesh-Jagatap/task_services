const express = require('express');

const router = express.Router();

const publishExamByIdController = require('@root/src/apis/controllers/v1/publishExamById')

router.patch('/exam/:Id',async(req, res, next) => {
    try {
        const result = await publishExamByIdController.publishExamById(req, res, next);
    
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
