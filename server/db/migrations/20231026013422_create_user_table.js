/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("user_name").notNullable().unique();
        table.string("hashed_password");
        table.string("salt");
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable("users");
};
