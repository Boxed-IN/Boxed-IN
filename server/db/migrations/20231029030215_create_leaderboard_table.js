/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("leaderboard", (table) => {
        table.increments("id").primary();
        table.string("user").notNullable().unique();
        table.integer("score", 9001).defaultTo(0);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable("leaderboard");
};
