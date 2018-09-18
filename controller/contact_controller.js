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
    },

    getContact: (req, res)=> {
        Contact.find({}, (err, contacts)=> {
            if(err) {
                return console.log(err);
            } else {
                return res.json(contacts);
            }
        })
    }
}