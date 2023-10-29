/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("movies", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable().unique();
        table.string("genre");
        table.string("language");
        table.text("overview");
        table.string("poster_link");
        table.string("year");
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable("movies");
};
