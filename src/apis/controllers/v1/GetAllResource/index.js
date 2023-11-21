const getAllResources = async (req, res, next) => {
    try {
        
        const resources = await ResourceService.getAllResources();
        if (!resources) {
            return HttpResponseHandler.success(req, res, resources);
        }
        
        return HttpResponseHandler.success(req, res, resources);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    getAllResources
}  
