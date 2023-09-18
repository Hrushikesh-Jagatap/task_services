const express = require('express');

const router = express.Router();

const getAssignByIdController = require('@controllers/v1/getAssignById')

router.get('/assign/:id',async(req, res) => {
    try {
        const result = await getAssignByIdController.getAssignById(req, res);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }    
});

module.exports = router;
