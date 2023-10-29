const knex = require("../knex");
const leaderboard = "leaderboard";

module.exports = {
  leaderboard,

  getAll() {
    return knex
      .select({
        id: "id",
        user: "user",
        score: "score",
      })
      .limit(10)
      .from(leaderboard)
      .orderBy("score", "desc");
  },

  getByName(name) {
    return knex
      .select({
        id: "id",
        user: "user",
        score: "score",
      })
      .from(leaderboard)
      .where({ user: name });
  },

  update(data, name) {
    return knex(leaderboard).where({ user_name: name }).update(data);
  },

  insertUser(user) {
    return knex(leaderboard).insert({
      user: user.user,
      score: user.score,
    });
  },
};
