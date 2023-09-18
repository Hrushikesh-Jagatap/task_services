const express = require('express');

const router = express.Router();

const getExamDetaialsByIdController = require('@root/src/apis/controllers/v1/getExamDetaialsById')

router.get('/exam/:Id',async(req, res) => {
    try {
        const result = await getExamDetaialsByIdController.getExamDetailsId(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }    
});

module.exports = router;
