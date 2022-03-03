exports.up = function(knex) {
  try {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('full_name', 150).notNullable();
      table.string('username', 20).notNullable();
      table.string('password', 255).notNullable();
      table.timestamps()/*.defaultTo(knex.fn.now())*/;
      table.unique('username');
    })
  } catch (err) {
    console.error('ERROR IN CREATING USERS TABLE')
  }
};

exports.down = function(knex) {
  try {
    return knex.schema.dropTableIfExists('users')
  } catch (err) {
    console.error('ERROR IN DROPING USERS TABLE')
  }
};
