const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
  // const ingredients = await db('ingredients as i')
  return db('recipes as r')
    .leftJoin('steps as s', 's.recipe_id', '=', 'r.recipe_id')
    .join('steps_ingredients as si', 's.step_id', '=', 'si.step_id')
    .join('ingredients as i', 'i.ingredient_id', '=', 'si.ingredient_id')
    .select(
      'r.recipe_id',
      'r.recipe_name',
      'r.created_at',
      's.step_id',
      's.step_number',
      's.instructions',
      'si.amount',
    )
    .where('r.recipe_id', '=', recipe_id)
    .orderBy('s.step_number');
}

module.exports = { getRecipeById };
