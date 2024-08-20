/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'ray', username: 'rowValue1', 
      password: 'rayray', department: 'deps', role: 1},
    
  ]);
};
