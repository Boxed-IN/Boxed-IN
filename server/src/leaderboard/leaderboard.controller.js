const userModel = require("./leaderboard.model");

async function returnByName(name) {
    let result = await userModel.getByName(name);
    return result;
}

async function returnAll() {
    let result = await userModel.getAll();
    return result;
}

async function updateLeaderboard(data, name) {
    await userModel.update(data, name);
}

async function addUser(data) {
    await userModel.insertUser(data);
}

module.exports = {
    returnByName,
    returnAll,
    updateLeaderboard,
    addUser
  };