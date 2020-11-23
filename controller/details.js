const Knex = require("knex");
const Router = require("../Routers");

module.exports = (Router, knex, verification) => {
    Router.post('/details', verification, (req, res) => {
        knex.select("*").from('users').where('email', req.body.email)
            .then(data => {
                res.send({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
            }).catch(err => {
                res.send(err);
                console.log(err);
            });
    });
};