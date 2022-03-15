exports.up = function(knex) {
  try {
    return knex.schema.createTable('note_items', (table) => {
      table.increments('id').primary();
      table.string('content', 500).notNullable();
      table.integer('note_id').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.foreign('note_id').references('Notes.id_in_notes').
        onDelete('CASCADE').
        onUpdate('NO ACTION');
    })
  } catch (err) {
    console.error('ERROR IN CREATING USERS TABLE')
  }
};

exports.down = function(knex) {
  try {
    return knex.schema.dropTableIfExists('note_items')
  } catch (err) {
    console.error('ERROR IN DROPING NOTES TABLE')
  }
};
