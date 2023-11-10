const QueService = require('@root/src/apis/services/v1/getquebystudentid');
const { HttpResponseHandler } = require('intelli-utility');


const getquebystudentid = async (req, res, next) => {
    try {
        const Que = await QueService.getquebystudentid(req.params.id);

        if (!Que) {
            return HttpResponseHandler.success(req, res, Que);
        }
        
        return HttpResponseHandler.success(req, res, Que);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getquebystudentid
}  