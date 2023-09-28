const express = require('express');

const router = express.Router();

const CreateAssignController = require('@controllers/v1/CreateAssignment');

router.post('/create-assign', async (req, res, next) => {
    try {
        const result = await CreateAssignController.createAssign(req, res, next);

    } catch (error) {
        next(error);
    }
});



module.exports = router;
