const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type: String
    },
    tel: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;