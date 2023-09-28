const express = require('express');

const router = express.Router();

const DeleteAssignByIdController = require('@root/src/apis/controllers/v1/deleteAssignById')

router.delete('/assign/:id', async (req, res, next) => {

    const result = await DeleteAssignByIdController.deleteAssignById(req. res, next)
    if (!result) {
        return HttpResponseHandler.success(req, res, result);
    } else {
        next(error);
    }

});

module.exports = router;
