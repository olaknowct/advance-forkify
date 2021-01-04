import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; // polyfill everything
import 'regenerator-runtime/runtime'; // polyfil async await

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // imports new instance
    recipeView.renderSpinner();

    // Load recipe and configure state
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();
