const User = require("../models/User");
const mailer = require("../mailer");

module.exports = {
    saveUser: (req, res)=> {

        // sending an email to a user
        mailer(req.body);

        // const user = new User(req.body);

        // user.save((err, doc)=> {
        //     if(err) {
        //         console.log(err);
        //     } else {
        //         console.log(doc);
        //     }
        // })
    }
}