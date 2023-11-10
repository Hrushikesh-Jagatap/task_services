
const express = require('express');

const router = express.Router();

const createResourceController = require('@controllers/v1/createResource');

router.post('/create-resource', async (req, res, next) => {
    // Extract the necessary data from the request body
    try {
        const result = await createResourceController.createResource(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;

