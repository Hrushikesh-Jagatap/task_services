const express = require('express');

const router = express.Router();

const updateResourceByIdController = require('@controllers/v1/updateResourceById')

router.put('/resource/:id', async(req, res, next) => {
    try {
        const result = await updateResourceByIdController.updateResourceById(req, res, next);

    } catch (error) {
        next(error);
    } 

});

module.exports = router;
