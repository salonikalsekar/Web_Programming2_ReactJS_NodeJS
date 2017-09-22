
const home = require("./home");

const constructorMethod = (app) => {
    app.use("/", home);

};

module.exports = constructorMethod;