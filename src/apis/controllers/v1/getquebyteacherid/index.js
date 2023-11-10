const QueService = require('@root/src/apis/services/v1/getquebyteacherid');
const { HttpResponseHandler } = require('intelli-utility');


const getquebyteacherid = async (req, res, next) => {
    try {
        const Que = await QueService.getquebyteacherid(req.params.id);

        if (!Que) {
            return HttpResponseHandler.success(req, res, Que);
        }
        
        return HttpResponseHandler.success(req, res, Que);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getquebyteacherid
}  