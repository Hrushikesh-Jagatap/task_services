const AssignService = require('@root/src/apis/services/v1/getAssignByBatchId');

// Controller function to get a Assignment  by  Batch ID
const getAssignByBatchId = async (req, res) => {
    try {
        const batch = await AssignService.getAssignByBatchId(req.params.id);

        const result = {
            data: null,
            success: false,
            error: 'Error in Finding  Assignment By BatchId',
        }
        if (!batch) {
            res.json(result);
        }
        result.data = batch;
        result.success = true;
        result.error = 'Getting Assignment Successfully By Batch id'
        res.status(200).json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAssignByBatchId
}  