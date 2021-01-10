import View from './View.js';
import previewView from './previewView.js';

import icons from 'url:../../img/icons.svg'; //parcel does parcing

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No Recipe Found for your query, please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
