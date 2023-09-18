const express = require('express');

const router = express.Router();

const DeletExamByIdController = require('@root/src/apis/controllers/v1/deleteExamById')

router.delete('/:id', async (req, res) => {
    const result = await DeletExamByIdController.deleteExamById(req)
    if (!result) {
        res.status(404).json({ message: 'Exam not found' });
    } else {
        res.json({ message: 'Exam deleted successfully' });
    }
});

module.exports = router;


module.exports = router;
