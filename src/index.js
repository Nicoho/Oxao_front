import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import moment from 'moment';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';
import ScrollChange from './component/user_front/ScrollChange';
import App from './App';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import '../node_modules/moment/locale/fr';
import 'react-notifications/lib/notifications.css';

moment.locale('fr');

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <ScrollChange>
        <App />
      </ScrollChange>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),

);

// If you want your app to work offline and load faster, you can change

// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
