const express = require('express');

const router = express.Router();

const CreateAssignController = require('@controllers/v1/CreateAssignment');

router.post('/create-assign', async (req, res) => {
    try {
        const result = await CreateAssignController.createAssign(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;
