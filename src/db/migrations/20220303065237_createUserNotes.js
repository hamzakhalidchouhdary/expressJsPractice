exports.up = function(knex) {
  try {
    return knex.schema.createTable('notes', (table) => {
      table.increments('id').primary();
      table.string('title', 150).notNullable().defaultTo('Untitled');
      table.integer('user_id').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.foreign('user_id').references('Users.id_in_users').
        onDelete('CASCADE').
        onUpdate('NO ACTION');
    })
  } catch (err) {
    console.error('ERROR IN CREATING USERS TABLE')
  }
};

exports.down = function(knex) {
  try {
    return knex.schema.dropTableIfExists('notes')
  } catch (err) {
    console.error('ERROR IN DROPING NOTES TABLE')
  }
};
