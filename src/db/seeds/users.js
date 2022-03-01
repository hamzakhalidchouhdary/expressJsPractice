exports.seed = (knex) => {
  try{
    // Deletes ALL existing entries
    return knex('users').del()
    .then(() => {
      // INSERT new entries
      return knex('users').insert([
        {full_name: 'hamza khalid chouhdary', username: 'hamzakhalidchouhdary', password: '123456789012345'},
        {full_name: 'naeem khalid chouhdary', username: 'naeemkhalidchouhdary', password: '123456789012345'},
        {full_name: 'taha khalid chouhdary', username: 'tahakhalidchouhdary', password: '123456789012345'}
      ]);
    })
    .catch(err => {throw err})
  } catch (err) {
    console.log('ERROR SEEDING USERS TABLE')
  }
};
