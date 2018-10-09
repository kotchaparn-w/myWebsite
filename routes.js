
const contactController = require("./controller/contact_controller");
const dashboardController = require("./controller/dashboard_controller");
const projectController = require("./controller/project_controller");

module.exports = function (app) {
    app.post('/contact', contactController.saveContact);

    app.get('/dashboard', dashboardController.getData);

    app.get('/project', projectController.getProject);
    app.post('/project/save', projectController.saveProject);
    app.delete('/project/delete', projectController.deleteProject);
};
