/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tournaments').del()
  await knex('tournaments').insert([
    { name: 'devTest', participants: JSON.stringify([{user_name: "adam", score: 2}, {user_name: "notAdam", score: 42}])}
  ]);
};
