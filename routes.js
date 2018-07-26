
module.exports = function (app) {
    // app.get('/', function(req, res) {
    //     res.send({ message: 'Super secret code is ABC123' });
    // });
    app.post('/contact', function(req, res) {
        console.log('all req', req.body);
        res.json({"success": true});
    })
};
