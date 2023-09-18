const TeacherService = require('@root/src/apis/services/v1/publishAssignById');

// Controller function to get a single teacher by userID
const publishAssignById = async (req, res) => {
    try {
        const Assign = await TeacherService.publishAssignById(req.params.Id);
        const result = {
            data: null,
            success: false,
            error: 'Error in publishing Assignment',
        }
        if (!Assign) {
            return Assign;
        }
        result.data = Assign;
        result.success = true;
        return result;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    publishAssignById
}  