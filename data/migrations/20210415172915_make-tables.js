exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (tbl) => {
      tbl.increments('recipe');
      tbl.string('recipe_name', 128).notNullable().unique();
      tbl.timestamp('created_at');
    })
    .createTable('ingredients', (tbl) => {
      tbl.increments('ingredient');
      tbl.string('ingredient_name', 128);
    })
    .createTable('steps', (tbl) => {
      tbl.increments('step');
      tbl.integer('step_number', 32).notNullable().unique();
      tbl.string('instructions', 128).notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
    })
    .createTable('steps_ingredients', (tbl) => {
      tbl.increments('steps_ingredient');
      tbl.integer('step_id', 32).notNullable().unique();
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
      tbl.integer('quantity', 32);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
