import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from 'src/reducers'
import reducer from 'src/reducers';

import projects from 'src/middlewares/projects';
import users from 'src/middlewares/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const enhancers = composeEnhancers(
  applyMiddleware(projects, users),
);


export default () => {
  let store = createStore(persistedReducer, enhancers);
  let persistor = persistStore(store)
  return { store, persistor }
}
