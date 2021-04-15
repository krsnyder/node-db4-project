const steps = [
  { step_number: '1', instructions: 'Cook eggs in a pan with olive oil on medium heat, reserve when finished. Boil Rice on the side.', recipe_id: '1' },
  { step_number: '2', instructions: 'Sautee Chicken Thighs in Olive Oil, reserve when finished', recipe_id: '1' },
  { step_number: '3', instructions: 'Fry rice in hot pan, then add reserved ingredients. Season with Soy Sauce and enjoy!', recipe_id: '1' },
  { step_number: '1', instructions: 'Soak Chickpeas overnight', recipe_id: '2' },
  { step_number: '2', instructions: 'Boil Chickpeas until soft, while boiling roast Garlic in oven with Olive Oil', recipe_id: '2' },
  { step_number: '3', instructions: 'Blend in food processor with Roasted Garlic, Tahini, and Lemon juice', recipe_id: '2' },
  { step_number: '1', instructions: 'Cook rice in water on medium heat until soft.', recipe_id: '3' },
  { step_number: '2', instructions: 'Grill Chicken Thighs', recipe_id: '3' },
  { step_number: '3', instructions: 'Assemble Rice, Chicken, Cheese, and Salsa in a bowl and enjoy', recipe_id: '3' },
];

exports.steps = steps;

exports.seed = function (knex) {
  return knex('steps').insert(steps);
};
