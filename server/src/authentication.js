const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    hash: hashPassword,
    check: checkPassword
};

async function hashPassword (password) {
    let newSalt = "1";
    let newHash = "2";

    const newerSalt = await bcrypt.genSalt(saltRounds);
    const newerHash = await bcrypt.hash(password, newerSalt);

   return {hashedPassword: newerHash, salt: newerSalt};
}

async function checkPassword (password, hash, salt) {
    let bool = false;
    bool = await bcrypt.compare(password, hash);
    return bool;
}