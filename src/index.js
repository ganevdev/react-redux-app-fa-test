import './marx.css';
import './index.css';

import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { getUsers } from './actions';
import App from './components/App';
import reducer from './reducers';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const FirstUsersInitiation = ({ children }) => {
  useEffect(() => {
    store.dispatch(getUsers(1));
  }, []);
  return <>{children}</>;
};

render(
  <Provider store={store}>
    <FirstUsersInitiation>
      <App />
    </FirstUsersInitiation>
  </Provider>,
  document.getElementById('root')
);
