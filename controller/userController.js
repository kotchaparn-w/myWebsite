const User = require("../models/User");
const mailer = require("../mail");

module.exports = {
    saveUser: (req, res)=> {
        console.log(req.body);
        mailer();
        const user = new User(req.body);
        // console.log(user);
        user.save((err, doc)=> {
            if(err) {
                console.log(err);
            } else {
                console.log(doc);
            }
        })
    }
}