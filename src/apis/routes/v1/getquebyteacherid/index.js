const express = require('express');

const router = express.Router();

const GetquebyteacheridController = require('@controllers/v1/getquebyteacherid')

router.get('/getque/teacher/:id',async(req, res, next) => {
    try {
        const result = await GetquebyteacheridController.getquebyteacherid(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
