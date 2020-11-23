module.exports = (Router, knex, verfication) => {
    Router.put('/delete/:email', verfication, (req, res) => {
        knex.select("*").from('admins').where('email', req.body.email)
            .then(data => {
                if (data.length != 0) {
                    knex('users').where('email', req.params.email).del()
                        .then(data => {
                            res.send("element has deleted");
                            console.log("element has deleted");
                        }).catch(err => {
                            res.send(err);
                            console.log(err);
                        });
                } else {
                    res.send("only a admin can delete");
                    console.log("only a admin can delete");
                }
            }).catch(err => {
                res.send(err);
                console.log(err);
            });
    });
};