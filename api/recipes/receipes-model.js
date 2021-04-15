const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
  // const ingredients = await db('ingredients as i')
  return db('recipes as r')
    .join('steps as s', 'recipes.recipe_id', '=', 'steps.recipe_id')
    .join('step-ingredients as si', 's.step_id', '=', 'si.step_id')
    // .join('ingredients as i', 's.step_id', '=', 'i.step_id')
    .select(
      'r.recipe_id',
      'r.recipe_name',
      'r.created_at',
      's.step_id',
      's.step_number',
      's.step_instructions',
      'si.amount',
    )
    .where('recipe_id', recipe_id)
    .orderBy('s.step_number');
}

module.exports = { getRecipeById };
