/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("tournaments", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable().unique();
        table.json("participants"); //Stores an array of objects, objects have user_name and score
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable("tournaments");
};
