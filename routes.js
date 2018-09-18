
const contactController = require("./controller/contact_controller");

module.exports = function (app) {
    // app.get('/', function(req, res) {
    //     res.send({ message: 'Super secret code is ABC123' });
    // });
    app.post('/contact', contactController.saveContact);
    app.get('/dashboard', contactController.getContact);
};
