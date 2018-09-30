const Contact = require("../models/Contact");
const mailer = require("../mailer");

module.exports = {
    saveContact: (req, res)=> {

        const contact = new Contact(req.body);

        contact.save((err, doc)=> {
            if(err) {
                console.log(err);
            } else {
                console.log(doc);
                // sending an email to a user
                mailer(req.body, res);
            }
        });
    }
}