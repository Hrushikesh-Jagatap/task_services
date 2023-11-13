const QueService = require('@services/v1/createque');
const { HttpResponseHandler } = require('intelli-utility');


// POST // create exam
const createQue = async (req, res, next) => {

  try {

    const queData = req.body;

    const createdQue = await QueService.createQue(queData);

    if (!createdQue) {
      return HttpResponseHandler.success(req, res, createdQue);
    }

   if(createdQue=="no active teacher")
   {
    return HttpResponseHandler.success(req, res, createdQue);
   // return HttpResponseHandler.success(req, res,);
   }
    return HttpResponseHandler.success(req, res, createdQue);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  createQue,
};
