const express = require('express');

const router = express.Router();

const publishExamByIdController = require('@root/src/apis/controllers/v1/publishExamById')

router.patch('/exam/:Id',async(req, res) => {
    try {
        const result = await publishExamByIdController.publishExamById(req, res);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }    
});

module.exports = router;
