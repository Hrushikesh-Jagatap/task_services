const express = require('express');

const router = express.Router();

const getQueByIdController = require('@controllers/v1/getque')

router.get('/getque/:id',async(req, res, next) => {
    try {
        const result = await getQueByIdController.getQueById(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
