const mongoCollections = require("../config/mongoCollections");
const tasks = mongoCollections.tasks;
const uuid = require('node-uuid');


let exportedMethods = {

    //Returns task by ID
    getTaskById(id) {
        return tasks().then((tasksCollection) => {
            return tasksCollection.findOne({ _id: id });
        });
    },

    //Returns all tasks by providing the skip and the take value
    //If the take value is provided, then the limit is the take value else maximum of 100 tasks would be displayed. 
    getAllTasks(skip, take) {

        //console.log("testing"+skip);

        return tasks().then((tasksCollection) => {
            if (take != null || skip != null)
                return tasksCollection.find({}).skip(skip).limit(take).toArray();

        });

    },

    //Returns all tasks with the default limit of 20 tasks
    getAllTasksByDefaultLimit() {
        return tasks().then((tasksCollection) => {
            return tasksCollection.find({}).limit(20).toArray();
        });

    },

    //Creates new task
    createTask(data) {
       
        return tasks().then((tasksCollection) => {
            let newTasks = {
                _id: uuid.v4(),
                title: data.title,
                description: data.description,
                hoursEstimated: data.hoursEstimated,
                completed: data.completed,
                comments: data.comments
            };

            return tasksCollection.insertOne(newTasks).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getTaskById(newId);
            });
        });
    },

    //Add new comment 
    addComments(id, commentdata) {
        
       // console.log(commentdata.comments.name);

        return tasks().then((tasksCollection) => {
            let newComment = {
                $push: {
                    comments: {
                        _id: uuid.v4(),
                        name: commentdata.comments.name,
                        comment: commentdata.comments.comment
                    }
                }
            };

            return tasksCollection.updateOne({ _id: id }, newComment).then(() => {
                return this.getTaskById(id);
            });
        });
    },

    //Deletes the comment 
    deleteComment(id, comment_id) {
        return tasks().then((tasksCollection) => {
            let deleteCommentData = {
                $pull: {
                    comments:
                    {
                        _id: comment_id
                    }
                }
            };
            return tasksCollection.update({ _id: id }, deleteCommentData).then(() => {
                return this.getTaskById(id);
            });
        });
    },

   
    updateTasksWithPut(id, updatedData) {

         return tasks().then((taskCollection) => {
            return this.getTaskById(id).then((oldTask) => {


                if (!updatedData.title) 
                    updatedTitle = oldTask.title;
                else 
                    updatedTitle = updatedData.title;
                if (!updatedData.description) 
                    updatedDescription = oldTask.description;
                else 
                    updatedDescription = updatedData.description;
                if (!updatedData.hoursEstimated) 
                    updatedHours = oldTask.hoursEstimated;
                else 
                    updatedHours = updatedData.hoursEstimated;
                if (!updatedData.completed) 
                    updatedCompleted = oldTask.completed;
                else 
                    updatedCompleted = updatedData.completed;
                if (!updatedData.comments) 
                    updatedComment = oldTask.comments;
                else 
                    updatedComment = updatedData.comments;

                let updatetask = {
                    title: updatedTitle,
                    description: updatedDescription,
                    hoursEstimated: updatedHours,
                    completed: updatedCompleted,
                }


                let updateTask = {
                    $set: updatetask
                };

                return taskCollection.updateOne({ _id: id }, updateTask).then(() => {
                    return this.getTaskById(id);
                });
            });
        });
    },
     updateTasksWithPatch(id, updatedData) {

        return tasks().then((taskCollection) => {
            return this.getTaskById(id).then((oldTask) => {

                if (!updatedData.title) 
                    updatedTitle = oldTask.title;
                else 
                    updatedTitle = updatedData.title;
                if (!updatedData.description) 
                    updatedDescription = oldTask.description;
                else 
                    updatedDescription = updatedData.description;
                if (!updatedData.hoursEstimated) 
                    updatedHours = oldTask.hoursEstimated;
                else 
                    updatedHours = updatedData.hoursEstimated;
                if (!updatedData.completed) 
                    updatedCompleted = oldTask.completed;
                else 
                    updatedCompleted = updatedData.completed;
                if (!updatedData.comments) 
                    updatedComment = oldTask.comments;
                else 
                    updatedComment = updatedData.comments;

                let updatedTask = {
                     title: updatedTitle,
                    description: updatedDescription,
                    hoursEstimated: updatedHours,
                    completed: updatedCompleted,
                }


                let updateTask = {
                    $set: updatedTask
                };

                return taskCollection.updateOne({ _id: id }, updateTask).then(() => {
                    return this.getTaskById(id);
                });
            });
        });

    },
}

module.exports = exportedMethods;