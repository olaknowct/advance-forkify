import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searhView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable'; // polyfill everything
import 'regenerator-runtime/runtime'; // polyfil async await

// parcel
if (module.hot) {
  module.hot.accept;
}
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

    if (!query) return;
    //  Load search results
    await model.loadSearchResults(query);

    // render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());
  } catch (error) {}
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searhView.addHandlerSearch(controlSearchResults);
};

init();
