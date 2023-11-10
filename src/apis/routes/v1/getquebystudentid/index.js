const express = require('express');

const router = express.Router();

const GetquebystudentidController = require('@controllers/v1/getquebystudentid')

router.get('/getque/student/:id',async(req, res, next) => {
    try {
        const result = await GetquebystudentidController.getquebystudentid(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
