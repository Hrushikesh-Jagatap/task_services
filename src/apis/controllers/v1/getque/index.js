const QueService = require('@root/src/apis/services/v1/getque');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a Que  by  ID
const getQueById = async (req, res, next) => {
    try {
        const que = await QueService.getQueById(req.params.id);

        if (!que) {
            return HttpResponseHandler.success(req, res, que);
        }
        
        return HttpResponseHandler.success(req, res, que);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getQueById
}  