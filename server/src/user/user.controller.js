const userModel = require("./user.model");
const crypter = require("../authentication");

module.exports = {
  async getUser(req, res) {
    if (req.params.id) {
      //by id
      try {
        const id = parseInt(req.params.id);
        const user = await userModel.getById(id);
        if (user) {
          // id found
          res.status(200).send(user);
        } else {
          // not found
          res.status(404).send("User does not exist.");
        }
      } catch (err) {
        // server side error
        res.status(500).send("Server problem.");
      }
    } else {
      // by user_name and pw
      try {
        const user = await userModel.checkUser(req.body.user_name);
        const validUser = await crypter.check(
          req.body.password,
          user[0].hashed_password,
          user[0].salt
        );
        if (validUser) {
          res.status(200).send(user);
        } else {
          res.status(404).send("Invalid user or password");
        }
      } catch (err) {
        res.status(500).send("Server problem. user name and pw");
      }
    }
  },

  async create(req, res) {
    try {
      let user = req.body;
      let checkUser = await userModel.checkUser(user.user_name);
      if (checkUser[0]) {
        return res.status(404).send("Username already exist");
      } else {
        let hashedData = await crypter.hash(user.password);

        let obj = {
          user_name: user.user_name,
          hashed_password: hashedData.hashedPassword,
          salt: hashedData.salt,
        };
        userCreated = await userModel.create(obj);

        res.status(200).send(userCreated);
      }
    } catch (err) {
      res.status(500).send("Server problem.");
    }
  },

  async login(data) {
    const user = await userModel.checkUser(data.user_name);
    const validUser = await crypter.check(
      data.password,
      user[0].hashed_password,
      user[0].salt
    );
    console.log(validUser);
    if (validUser === true) {
      return true;
    } else {
      return false;
    }
  },
};
