exports.up = function(knex) {
  try {
    return knex.schema.createTable('users', (t) => {
      t.increments('id');
      t.string('full_name', 150).notNullable();
      t.string('username', 20).notNullable();
      t.string('password', 255).notNullable();
      t.timestamps();
    })
  } catch (err) {
    console.error('ERROR IN CREATING USERS TABLE')
  }
};

exports.down = function(knex) {
  try {
    return knex.schema.dropTable('users')
  } catch (err) {
    console.error('ERROR IN DROPING USERS TABLE')
  }
};
