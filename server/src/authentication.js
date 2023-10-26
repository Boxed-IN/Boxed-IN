const bcrypt = require('bcrypt');
const saltRounds = 10;

export const crypter = {
    hash: hashPassword,
    check: checkPassword
};

async function hashPassword (password) {
    let newSalt = "";
    let newHash = "";

    await bcrypt.genSalt(saltRounds, function(err, salt) {
        newSalt = salt;
        bcrypt.hash(password, salt, function(err, hash) {
            newHash = hash;
        });
    });

   return {hashedPassword: newHash, salt: newSalt};
}

async function checkPassword (password, hash) {
    let bool = false;

    bcrypt.compare(password, hash, function(err, result) {
        bool == result;
    });
    return bool;
}