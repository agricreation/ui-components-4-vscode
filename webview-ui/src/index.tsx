import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { AppStore } from './store/store'; // Import the store and its type definition
import App from './App';

ReactDOM.render(
  <Provider store={store as AppStore}> {/* Cast store to the AppStore type */}
    <App />
  </Provider>,
  document.getElementById('root')
);
