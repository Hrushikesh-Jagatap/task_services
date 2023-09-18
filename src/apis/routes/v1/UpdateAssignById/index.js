const express = require('express');

const router = express.Router();

const UpdateAssignByIdController = require('@controllers/v1/UpdateAssignById')

router.put('/assign/:id', async(req, res) => {
    try {
        const result = await UpdateAssignByIdController.updateAssignById(req, res);
        return res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    } 

});

module.exports = router;
