const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
  // const ingredients = await db('ingredients as i')
  const rows = await db('recipes as r')
    .leftJoin('steps as s', 's.recipe_id', '=', 'r.recipe_id')
    // .leftJoin('steps_ingredients as si', 's.step_id', '=', 'si.step_id')
    // .leftJoin('ingredients as i', 'i.ingredient_id', '=', 'si.ingredient_id')
    .select(
      'r.recipe_id',
      'r.recipe_name',
      'r.created_at',
      's.step_id',
      's.step_number',
      's.instructions',
      // 'si.amount',
      // 'i.ingredient_name',
    )
    .where('r.recipe_id', '=', recipe_id)
    .orderBy('s.step_number');

  const result = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    created_at: rows[0].created_at,
    steps: [],
  };

  rows.forEach((row) => {
    result.steps.push({
      step_id: row.step_id,
      step_number: row.step_number,
      step_instructions: row.instructions,
      ingredients: [],
    });
  });

  return result;
}

module.exports = { getRecipeById };
