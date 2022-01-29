 const db = require("../models");
 const User = db.user;
 const Role = db.role;

 exports.findAllRolesByUserId = (req, res) => {
    User.findOne({
        where: {
          id: req.body.id
        },
        include: Role 

      })
      .then(users => {
            res.status(200).send({
                userId : users.id,
                nom: users.nom,
                roles : users.roles[0].name
            });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.updateRoleByUserId = (req, res) => {

  // TODO
  
  };
