
const contactController = require("./controller/contact_controller");

module.exports = function (app) {
    app.post('/contact', contactController.saveContact);
    app.get('/dashboard', contactController.getContact);
};
