import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searhView from './views/searchView.js';
import resultsView from './views/resultsView.js';

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
    resultsView.renderSpinner();
    //  get search query
    const query = searhView.getQuery();
    console.log(query);
    if (!query) return;
    //  Load search results
    await model.loadSearchResults(query);
    console.log('tada');

    // render results
    resultsView.render(model.state.search.results);
  } catch (error) {}
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searhView.addHandlerSearch(controlSearchResults);
};

init();
