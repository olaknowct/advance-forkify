import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searhView from './views/searchView.js';

import 'core-js/stable'; // polyfill everything
import 'regenerator-runtime/runtime'; // polyfil async await

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

const controlSearchResults = async function () {
  try {
    const query = searhView.getQuery();

    if (!query) return;
    await model.loadSearchResults(query);
    searchView.clearInput();
    console.log(model.state.search.results);
  } catch (error) {}
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searhView.addHandlerSearch(controlSearchResults);
};

init();
