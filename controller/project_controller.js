const Project = require("../models/Project");

module.exports = {
    saveProject: (req, res)=> {
        console.log(req.body);
        const project = new Project(req.body);
        project.save((err, doc)=> {
            if(err) {
                console.log(err);
            } else {
                console.log(doc);
                res.json({sucess: true});
            }
        })
    }
}