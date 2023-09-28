const AssignService = require('@root/src/apis/services/v1/getAssignByBatchId');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a Assignment  by  Batch ID
const getAssignByBatchId = async (req, res, next) => {
    try {
        const batch = await AssignService.getAssignByBatchId(req.params.id);

        if (!batch) {
            return HttpResponseHandler.success(req, res, batch);
        }
        
        return HttpResponseHandler.success(req, res, batch);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAssignByBatchId
}  