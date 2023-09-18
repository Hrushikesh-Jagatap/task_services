const express = require('express');

const router = express.Router();

const DeleteAssignByIdController = require('@root/src/apis/controllers/v1/deleteAssignById')

router.delete('/assign/:id', async (req, res) => {
    const result = await DeleteAssignByIdController.deleteAssignById(req)
    if (!result) {
        res.status(404).json({ message: 'Assignment not found' });
    } else {
        res.json({ message: 'Assignment deleted successfully' });
    }
});

module.exports = router;


module.exports = router;
