exports.seed = (knex) => {
  try{
    // Deletes ALL existing entries
    return knex('notes').del()
    .then(() => {
      // INSERT new entries
      return knex('notes').insert([
        {title: 'test note', user_id: '1'},
        {title: 'test note', user_id: '3'},
        {title: '', user_id: '50'}
      ]);
    })
    .catch(err => {throw err})
  } catch (err) {
    console.log('ERROR SEEDING USERS TABLE')
  }
};