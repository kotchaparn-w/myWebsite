
const userController = require("./controller/userController");

module.exports = function (app) {
    // app.get('/', function(req, res) {
    //     res.send({ message: 'Super secret code is ABC123' });
    // });
    app.post('/contact', userController.saveUser);
};
