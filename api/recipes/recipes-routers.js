const express = require('express');
const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  Recipes.getRecipeById(req.params.id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch(next);
});

module.exports = router;
