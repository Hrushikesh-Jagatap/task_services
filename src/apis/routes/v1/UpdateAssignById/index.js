const express = require('express');

const router = express.Router();

const UpdateAssignByIdController = require('@controllers/v1/UpdateAssignById')

router.put('/assign/:id', async(req, res, next) => {
    try {
        const result = await UpdateAssignByIdController.updateAssignById(req, res, next);
    } catch (error) {
        next(error);
    } 

});

module.exports = router;
