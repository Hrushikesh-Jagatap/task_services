const express = require('express');

const router = express.Router();

const publishAssignByIdController = require('@root/src/apis/controllers/v1/publishAssignById')

router.patch('/assign/:Id',async(req, res) => {
    try {
        const result = await publishAssignByIdController.publishAssignById(req, res);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }    
});

module.exports = router;
