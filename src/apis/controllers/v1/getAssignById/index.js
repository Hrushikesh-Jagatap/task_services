const AssignService = require('@root/src/apis/services/v1/getAssignById');

// Controller function to get a single Assign by ID
const getAssignById = async (req, res) => {
    try {
        const assign = await AssignService.getAssignById(req.params.id.toString());
        const result = {
            data: null,
            success: false,
            error: 'Error in Finding Assignment ',
        }
        if (!assign) {
            res.status(200).json(result);
        }
        result.data = assign;
        result.success = true;
        result.error = 'Geting Assignment Suceessfully'
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAssignById
}  