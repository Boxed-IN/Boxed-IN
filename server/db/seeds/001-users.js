/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, user_name: 'Adam', hashed_password: "Placeholder", salt: "a"},
    {id: 2, user_name: 'Kai', hashed_password: "NotTrue", salt: "b"},
    {id: 3, user_name: 'Julio', hashed_password: "lol", salt: "c"}
  ]);
};
