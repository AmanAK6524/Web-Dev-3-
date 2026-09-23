const express = require("express");
const router = express.Router();
const students = require("../data/students");

// GET ALL STUDENTS
router.get("/", function(req, res) {
    res.status(200).json(students);
});

// GET STUDENT BY ID
router.get("/:id", function(req, res) {
    let id = parseInt(req.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            res.status(200).json(students[i]);
            return;
        }
    }

    res.status(404).json({
        message: "Student not found"
    });
});

// ADD NEW STUDENT
router.post("/", function(req, res) {
    let newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course,
        email: req.body.email
    };

    if (!newStudent.name || !newStudent.age || !newStudent.course || !newStudent.email) {
        res.status(400).json({
            message: "All fields are required"
        });
        return;
    }

    students.push(newStudent);

    res.status(201).json(newStudent);
});

// UPDATE STUDENT
router.put("/:id", function(req, res) {
    let id = parseInt(req.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students[i].name = req.body.name;
            students[i].age = req.body.age;
            students[i].course = req.body.course;
            students[i].email = req.body.email;

            res.status(200).json(students[i]);
            return;
        }
    }

    res.status(404).json({
        message: "Student not found"
    });
});

// DELETE STUDENT
router.delete("/:id", function(req, res) {
    let id = parseInt(req.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students.splice(i, 1);

            res.status(200).json({
                message: "Student deleted successfully"
            });
            return;
        }
    }

    res.status(404).json({
        message: "Student not found"
    });
});

// EXPORT ROUTER
module.exports = router;
