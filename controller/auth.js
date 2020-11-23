  var jwt = require('jsonwebtoken');

  module.exports = (req, res, next) => {
      var token = req.headers.authorization;
      console.log(token);
      // console.log(token)
      jwt.verify(token, "secretKey", (err, data) => {
          console.log(data);
          if (!err) {
              if (data == req.body.email) {
                  next();
              } else {
                  console.log("err");
                  res.sendStatus(403);
              }
          } else {
              res.send(err);
              console.log(err);
          }
      });
  };