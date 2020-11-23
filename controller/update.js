module.exports = (Router, knex, verification) => {
    Router.put('/update', verification, (req, res) => {
        console.log("werfg");
        console.log(req.body);
        knex.select('*').from('admins').where('email', req.body.email)
            .then(data => {
                if (data.length != 0) {
                    knex('users').insert({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password
                    }).then(resp => {
                        res.send(resp, "details has updated");
                    }).catch(err => {
                        res.send(err);
                    });
                } else {
                    res.send("only admins can update");
                }
            }).catch(err => {
                res.send(err, "hello");
            });
    });
};