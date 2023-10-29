const knex = require("../knex");
const tournaments = "tournaments";


module.exports = {
    tournaments,

    getAll() {
        return knex.select({
            id: "id",
            name: "name",
            participants: "participants"
        }).from(tournaments)
    },

    getByName(name) {
        return knex.select({
            id: "id",
            name: "name",
            participants: "participants"
        }).from(tournaments)
        .where({name: name})
    },

    updateParticipants(data, name) {

        let oldP = knex(tournaments).select("participants").where({name: name})

        return knex(tournaments)
        .where({name: name})
        .update(data)
    },

    create(data) {
        return knex(tournaments)
        .insert({
            name: data,
          });
    }
}