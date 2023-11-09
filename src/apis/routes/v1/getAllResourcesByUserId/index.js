const express = require('express');

const router = express.Router();

const getAssignByController = require('@controllers/v1/getAllResourcesByUserId')

router.get('/resource/:userId',async(req, res, next) => {
    try {
        const result = await getAssignByController.getAllResources(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
