const express = require('express');

const router = express.Router();

const getAssignById  = require('./getAssignById'); //ok

const CreateAssignment = require('./CreateAssignment'); //ok

const UpdateAssignById = require('./UpdateAssignById'); //ok

// const NotificationRoute = require('./Notification')

const publishAssignById = require('./publishAssignById')

const CreateExam = require('./CreateExam') //ok

const UpdateExamById = require('./UpdateExamById') //ok

const getAssignByBatchId = require('./getAssignByBatchId') //ok

const getExamDetaialsById = require('./getExamDetaialsById') //ok

const getExamDetaialsByBatchId = require('./getExamDetaialsByBatchId') //ok

const publishExamById = require('./publishExamById')

const deleteExamById = require('./deleteExamById');

const deleteAssignById = require('./deleteAssignById');

router.use('/', deleteAssignById);

router.use('/', deleteExamById);

// Route to get all teachers
router.use('/', publishAssignById);

router.use('/', publishExamById);

// Route to create a new Assignment
router.use('/', CreateAssignment);

// Route to get a single teacher by ID
router.use('/', getAssignById);

// Route to update a teacher by ID
router.use('/', UpdateAssignById);


// Route to CreateExam
router.use('/', CreateExam);

// route to update batch by teacherId
router.use('/', UpdateExamById);

// router to get batch by teacherId;
router.use('/', getExamDetaialsById);

// route to get batch by BatchId
router.use('/', getAssignByBatchId )

router.use('/', getExamDetaialsByBatchId);



module.exports = router;
