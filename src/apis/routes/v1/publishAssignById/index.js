const express = require('express');

const router = express.Router();

const publishAssignByIdController = require('@root/src/apis/controllers/v1/publishAssignById')

router.patch('/assign/:Id',async(req, res, next) => {
    try {
        const result = await publishAssignByIdController.publishAssignById(req, res, next);
      
    } catch (error) {
       next(error);
    }    
});

module.exports = router;
