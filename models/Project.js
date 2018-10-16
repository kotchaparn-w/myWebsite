const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name : String,
    highlight: String,
    description: String,
    link: String,
    categories: [],
    image: {
            name: String,
            link: String
        
    }
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;