const tasks = require("./tasks");

const constructorMethod = (app) => {
    app.use("/api/tasks", tasks);

    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;