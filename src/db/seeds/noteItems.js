exports.seed = (knex) => {
  try{
    // Deletes ALL existing entries
    return knex('note_items').del()
    .then(() => {
      // INSERT new entries
      return knex('note_items').insert([
        {content: 'test item1', note_id: '1'},
        {content: 'test item2', note_id: '1'},
        {content: 'test item3', note_id: '1'},
        {content: 'test item4', note_id: '1'},
        {content: 'test item1', note_id: '2'},
        {content: 'test item2', note_id: '2'},
        {content: 'test item1', note_id: '3'},
        {content: 'test item1', note_id: '4'},
        
      ]);
    })
    .catch(err => {throw err})
  } catch (err) {
    console.log('ERROR SEEDING USERS TABLE')
  }
};