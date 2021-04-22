const ingredients = [
  { ingredient_name: 'Rice' },
  { ingredient_name: 'Eggs' },
  { ingredient_name: 'Chicken Thighs' },
  { ingredient_name: 'Chickpeas' },
  { ingredient_name: 'Tahini' },
  { ingredient_name: 'Lemon' },
  { ingredient_name: 'Garlic' },
  { ingredient_name: 'Salsa' },
  { ingredient_name: 'Cheddar Cheese' },
  { ingredient_name: 'Olive Oil' },
  { ingredient_name: 'Soy Sauce' },
];

exports.ingredients = ingredients;

exports.seed = function (knex) {
  return knex('ingredients').insert(ingredients);
};
