const express = require('express');

const router = express.Router();

const getAssignByIdController = require('@controllers/v1/getque')

router.get('/getque/:id',async(req, res, next) => {
    try {
        const result = await getAssignByIdController.getAssignByBatchId(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
