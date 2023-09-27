const express = require('express');

const router = express.Router();

const getExamDetaialsByIdController = require('@root/src/apis/controllers/v1/getExamDetaialsById')

router.get('/exam/:Id',async(req, res, next) => {
    try {
        const result = await getExamDetaialsByIdController.getExamDetailsId(req, res, next);
    
    } catch (error) {
       next(error);
    }    
});

module.exports = router;
