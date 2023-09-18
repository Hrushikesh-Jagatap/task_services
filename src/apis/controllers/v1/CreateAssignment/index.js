const AssignService = require('@root/src/apis/services/v1/CreateAssignment');

// Controller function to create a new Assignment
const createAssign = async (req, res) => {
    try {
        const newAssign = await AssignService.createAssign(req.body);

        if (!newAssign) {
            res.status(400).json({ error: 'Error in creating New Assignment' });
        }

        const result = {
            data: newAssign,
            success: true,
            message: 'Assignment created successfully',
        };

        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createAssign
};
