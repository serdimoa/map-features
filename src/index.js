import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './Containers/App';
import configureStore from './store';
import { loadUsers } from './Actions/app.actions';
import './styles/index.css';

const store = configureStore();

store.dispatch(loadUsers());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
);
