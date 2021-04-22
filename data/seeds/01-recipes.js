const recipes = [
  { recipe_name: 'Chicken Thigh Fried Rice', created_at: Date.now() },
  { recipe_name: 'Roasted Garlic Hummus', created_at: Date.now() },
  { recipe_name: 'Chicken Taco Bowl', created_at: Date.now() },
];

exports.recipes = recipes;

exports.seed = function (knex) {
  return knex('recipes').insert(recipes);
};
