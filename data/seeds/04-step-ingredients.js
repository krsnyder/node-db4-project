const stepIngredients = [
  { step_id: '1', ingredient_id: '2', amount: '2' },
  { step_id: '1', ingredient_id: '10', amount: '1' },
  { step_id: '1', ingredient_id: '1', amount: '2' },
  { step_id: '2', ingredient_id: '3', amount: '1' },
  { step_id: '2', ingredient_id: '10', amount: '0.5' },
  { step_id: '3', ingredient_id: '1', amount: '1' },
  { step_id: '3', ingredient_id: '11', amount: '1' },
  { step_id: '4', ingredient_id: '4', amount: '4' },
  { step_id: '5', ingredient_id: '7', amount: '1' },
  { step_id: '5', ingredient_id: '10', amount: '3' },
  { step_id: '6', ingredient_id: '4', amount: '4' },
  { step_id: '6', ingredient_id: '5', amount: '2.5' },
  { step_id: '6', ingredient_id: '6', amount: '0.75' },
  { step_id: '6', ingredient_id: '7', amount: '1' },
  { step_id: '7', ingredient_id: '1', amount: '1.5' },
  { step_id: '8', ingredient_id: '3', amount: '2.5' },
  { step_id: '9', ingredient_id: '3', amount: '2.5' },
  { step_id: '9', ingredient_id: '1', amount: '1.5' },
  { step_id: '9', ingredient_id: '8', amount: '0.5' },
  { step_id: '9', ingredient_id: '9', amount: '7' },
];

exports.step_ingredients = stepIngredients;

exports.seed = function (knex) {
  return knex('step_ingredients').insert(stepIngredients);
};
