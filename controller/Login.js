module.exports = (Router, knex, jwt) => {
    Router.post('/login', (req, res) => {
        knex.select("*").from("users").where("email", req.body.email)
            .then(data => {
                if (data.length != 0) {
                    if (data[0].password === req.body.password) {
                        const token = jwt.sign(req.body.email, "secretKey");
                        res.json({ msg: "you have logged in successfully", token: token });
                        console.log("you have logged in successfully");
                    } else {
                        res.send("your password is incorrect");
                        console.log("your password is incorrect");
                    }

                } else {
                    res.send("this email is not matched with anyone");
                }
            }).catch(err => {
                res.send(err);
                console.log(err);
            });
    });


    Router.post('/login/admin', (req, res) => {
        knex.select('*').from('admins').where('email', req.body.email)
            .then(data => {
                if (data.length != 0) {
                    if (data[0].password === req.body.password) {
                        const token = jwt.sign(req.body.email, "secretKey");
                        res.json({ msg: "you have logged in successfully", token: token });
                        console.log("you have logged in successfully");
                    } else {
                        res.send("your password is incorrect");
                        console.log("your password is incorrect");
                    }

                } else {
                    res.send("you are not a admin");
                    console.log("you are not a admin");
                }

            })
            .catch(err => {
                res.send(err);
                console.log(err);
            });
    });
};