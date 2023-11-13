const express = require('express');

const router = express.Router();

const updatesatusController = require('@controllers/v1/updatestatus')

router.put('/status/:id', async(req, res, next) => {
    try {
        const result = await updatesatusController.updatesattusById(req, res, next);

    } catch (error) {
        next(error);
    } 

});

module.exports = router;
