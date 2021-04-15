const ingredients = [
  { name: 'Rice' },
  { name: 'Eggs' },
  { name: 'Chicken Thighs' },
  { name: 'Chickpeas' },
  { name: 'Tahini' },
  { name: 'Lemon' },
  { name: 'Garlic' },
  { name: 'Salsa' },
  { name: 'Cheddar Cheese' },
  { name: 'Olive Oil' },
  { name: 'Soy Sauce' },
];

exports.ingredients = ingredients;

exports.seed = function (knex) {
  return knex('ingredients').insert(ingredients);
};
