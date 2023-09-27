const express = require('express');

const router = express.Router();

const DeletExamByIdController = require('@root/src/apis/controllers/v1/deleteExamById')

const { HttpResponseHandler } = require('intelli-utility');

router.delete('/:id', async (req, res, next) => {
    const result = await DeletExamByIdController.deleteExamById(req, res, next)
    if (!result) {
        return HttpResponseHandler.success(req, res, result);
    } else {
        next(error);
    }
});

module.exports = router;

