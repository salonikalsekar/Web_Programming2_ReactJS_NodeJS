const express = require('express');
const router = express.Router();
const data = require("../data");
const apiData = data.tasks;


router.get("/", (req, res) => {

    let skipValue = parseInt(req.query.skip);
    let takeValue = parseInt(req.query.take);
    let limit = 0;

    if (isNaN(skipValue) && isNaN(takeValue)) {

        apiData.getAllTasksByDefaultLimit().then((tasks) => {
            res.json(tasks);
        }).catch((error) => {
            res.status(404).json({ message: "Some error occurred!" });
        });
    }

    //Maximum 100 tasks would be returned
    else {

        if (takeValue <= 100)
            limit = takeValue;
        else
            limit = 100;

        apiData.getAllTasks(skipValue, limit).then((post) => {
            res.json(post);
        }).catch((error) => {
            res.status(404).json({ message: "Some error occurred!" });
        });

    }
});

router.get("/:id", (req, res) => {
    // console.log(req.params.id);
    apiData.getTaskById(req.params.id).then((post) => {
        //  console.log(post);
        res.json(post);
    }).catch((error) => {
        res.status(404).json({ message: "Task not found" });
    });
});


router.post("/", (req, res) => {
    if (!req.body.title || !req.body.description || !req.body.hoursEstimated || !req.body.completed) {
        res.status(404).json({ message: "Please insert all the values" });
    }
    else {
        if (typeof req.body.title !== "string") {
            res.status(404).json({ message: "Insert a string in the title" });
        }
        if (typeof req.body.description !== "string") {
            res.status(404).json({ message: "Insert a string in the description" });
        }
        if (typeof req.body.hoursEstimated !== "number") {
            res.status(404).json({ message: "Insert a number in hours estimated" });
        }
        if (typeof req.body.completed !== "boolean") {
            res.status(404).json({ message: "Insert a boolean value in the completed" });
        }

        console.log(req.body);
        apiData.createTask(req.body).then((createdTask) => {
            res.json(createdTask);
        }, () => {
            res.status(400).send();
        });
    }
});

router.put("/:id", (req, res) => {


    console.log(req.body);
    if (!req.body.title || !req.body.description || !req.body.hoursEstimated || !req.body.completed) {
        res.status(404).json({ message: "Please insert all the values" });
    }
    else  {
        if (typeof req.body.title !== "string") {
            res.status(404).json({ message: "Insert a string in the title" });
        }
        if (typeof req.body.description !== "string") {
            res.status(404).json({ message: "Insert a string in the description" });
        }
        if (typeof req.body.hoursEstimated !== "number") {
            res.status(404).json({ message: "Insert a number in hours estimated" });
        }
        if (typeof req.body.completed !== "boolean") {
            res.status(404).json({ message: "Insert a boolean value in the completed" });
        }

        
        apiData.updateTasksWithPut(req.params.id, req.body).then((taskData) => {
            //console.log(taskData);
            res.json(taskData);
        }, () => {
            res.status(500).send();
        });
    }


});

router.patch("/:id", (req, res) => {
    console.log(req.body);
    apiData.updateTasksWithPatch(req.params.id, req.body).then((createdTask) => {
        res.json(createdTask);
    }, () => {
        res.status(500).send();
    });
});

router.post("/:id/comments", (req, res) => {
    if (!req.body.comments.name || !req.body.comments.comment) {
        res.status(404).json({ message: "Please insert all the values" });
    }
    if (typeof req.body.comments.name !== "string") {
        res.status(404).json({ message: "Insert a string in the title" });
    }
    if (typeof req.body.comments.comment !== "string") {
        res.status(404).json({ message: "Insert a string in the description" });
    }
    // console.log(req.params.id);
    console.log(req.body);

    apiData.addComments(req.params.id, req.body).then((createdTask) => {
        res.json(createdTask);
    }, () => {
        res.status(500).send();
    });
});

router.delete("/:taskId/:commentId", (req, res) => {
    apiData.deleteComment(req.params.taskId, req.params.commentId).then((createdTask) => {
        res.json(createdTask);
    }, () => {
        res.status(404).json("Task not found!");
    });
});

module.exports = router;