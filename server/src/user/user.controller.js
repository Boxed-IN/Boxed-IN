const userModel = require("./user.model");

module.exports = {
    async getUser(req, res) {
        if(req.params.id) { //by id
            try {
                const id = parseInt(req.params.id);
                const user = await userModel.getById(id);
                console.log(user)
                res.status(200).send(user);
            } catch (err) {
                console.log("err")
                console.error(err);
            }
        } else { // by user_name and pw
            const user = await userModel.getUser(req.body.user_name, req.body.hashed_password);
            res.status(200).send(user);
        }
    },
    async create(req, res) {
        let user = req.body;

        userCreated = await userModel.create(user);
        console.log(userCreated + " controller")
        res.status(200).send(userCreated);
    },
}