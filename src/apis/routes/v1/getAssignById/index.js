const express = require('express');

const router = express.Router();

const getAssignByIdController = require('@controllers/v1/getAssignById')

router.get('/assign/:id',async(req, res, next) => {
    try {
        const result = await getAssignByIdController.getAssignById(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
