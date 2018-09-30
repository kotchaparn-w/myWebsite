const Contact = require("../models/Contact");
const Project = require("../models/Project");


module.exports = {
    getData: (req, res)=> {
        Contact.find({}).exec((err, contacts)=> {
            if(err){
                console.log(err)
            } else{
                Project.find({}).exec((err, projects)=> {
                    if(err) {
                        console.log(err)
                    } else {
                        res.json({
                            contacts,
                            projects
                        });
                    }
                });
            }
        });
    }
}
