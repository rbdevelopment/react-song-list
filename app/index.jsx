import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import AddButtons from './components/AddButtons';
import DragSelectorContainer from './containers/DragSelectorContainer';
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import reducer from './logic/reducer';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
  <Header />,
  document.getElementById('info-container')
);

ReactDOM.render(
  <AddButtons store={store} />,
  document.getElementById('add-buttons')
);

ReactDOM.render(
  <Provider store={store}>
  <DragSelectorContainer />
  </Provider>,
  document.getElementById('drag-selector')
);
