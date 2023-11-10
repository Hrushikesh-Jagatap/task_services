const express = require('express');

const router = express.Router();

const UpdateExamByIdController = require('@controllers/v1/updateque')

router.put('/que/:id', async(req, res, next) => {
    try {
        const result = await UpdateExamByIdController.updatequeById(req, res, next);

    } catch (error) {
        next(error);
    } 

});

module.exports = router;
