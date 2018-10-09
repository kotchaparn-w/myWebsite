const Project = require("../models/Project");

module.exports = {
    getProject: (req, res)=> {
        Project.find({}).exec((err, projects)=> {
            if(err) {
                console.log(err)
            } else {
                res.json({
                    projects
                });
            }
        });
    },

    saveProject: (req, res)=> {
        const project = new Project(req.body);
        project.save((err, doc)=> {
            if(err) {
                console.log(err);
            } else {
                res.json({success: true});
            }
        });
    },
    
    deleteProject: (req, res)=> {
        console.log(req.body.projectId);
        Project.findOneAndDelete({_id: req.body.projectId}, (err, doc)=> {
            if(err) {
                console.log(err);
            } else {
                console.log(doc);
                res.json({success: true});
            }
        });
    }
}