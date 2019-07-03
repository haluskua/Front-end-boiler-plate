
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Ben' },
        { id: 2, name: 'person2' },
        { id: 3, name: 'Person3' }
      ]);
    });
};
