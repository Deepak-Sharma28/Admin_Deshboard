module.exports = (Router, knex) => {
    Router.post('/Signup', (req, res) => {
        knex.select('email', 'password').from('users').where('password', req.body.password)
            .then(data => {
                if (data.length != 0) {
                    res.send('you are already a user please go and login');
                } else {
                    knex('users').insert({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password
                    }).then(data => {
                        res.send("you have successfully signed up");
                    }).catch(err => {
                        res.send(err);
                        console.log(err);
                    });
                }
            }).catch(err => {
                res.send(err);
                console.log(err);
            });
    });

    Router.post('/Signup/admin', (req, res) => {
        if (process.env.SUPERADMIN == req.body.superadmin) {
            knex.select('*').from('admins').where('email', req.body.email)
                .then(data => {
                    if (data.length == 0) {
                        knex('admins').insert({
                            name: req.body.name,
                            email: req.body.email,
                            password: req.body.password
                        }).then(resp => {
                            res.send("element has created");
                        }).catch(err => {
                            res.send(err);
                        });
                    } else {
                        res.send("this elements is already exists");
                    }
                }).catch(err => {
                    res.send(err);
                    console.log(err);
                });
        } else {
            res.send("you are not a superadmin");
            console.log("you are not a superadmin");
        }
    });
};