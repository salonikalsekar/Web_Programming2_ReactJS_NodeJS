const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const users = data.tasks;

dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    }).then((db) => {
        let data = {
            "id": "956f8670-3bb3-460f-88cd-24ca7ee9091f",
            "title": "Make lab",
            "description": "Make the first lab for CS-554. Maybe talk about dinosaurs in it, or something",
            "hoursEstimated": 1,
            "completed": false,
            "comments": [
                {
                    "_id": "d0feb7c1-d4a8-4ca6-a8a7-2ed0a0189e28",
                    "name": "Phil",
                    "comment": "Considering lab about dinosaurs"
                }
            ]
        }
        return users.createTask(data);
    }).then((phil) => {
        console.log("Done seeding database");
        db.close();
    });
}, (error) => {
    console.error(error);
});
