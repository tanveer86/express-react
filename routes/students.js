const express = require('express');
const router = express.Router();
const StudentPost = require('../models/Student');

router.get('/', async (request, response) => {
    try {
        let studentsList = await StudentPost.find();
        response.json(studentsList);
    }catch(error) {
        response.json({message: error})
    }
});

router.post('/', async (request, response) => {
    let student = new StudentPost({
        name: request.body.name,
        image: request.body.image,
        course: request.body.course
    });

    try {
        let savedStudent = await student.save();
        response.json(savedStudent);
    }catch(error) {
        response.json({message: error})
    }
});

router.get('/:studentId', async (request, response) => {
    try {
        let singleStudent = await StudentPost.findById(request.params.studentId);
        response.json(singleStudent);
    }catch(error) {
        response.json({message: error})
    }
});

router.delete('/:studentId', async (request, response) => {
    try {
        let deleteStudent = await StudentPost.remove({_id: request.params.studentId});
        response.json(deleteStudent)
    } catch (error) {
        response.json({message: error})
    }
});

router.patch('/:studentId', async (request, response) => {
    try {
        let updateStudent = await StudentPost.updateOne({_id: request.params.studentId}, {$set: {name: request.body.name, image: request.body.image, course: request.body.course}});
        response.json(updateStudent);
    } catch (error) {
        response.json({message: error})
    }
})

module.exports = router;