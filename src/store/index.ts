import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import rootEpic from 'src/store/root.epic';
import { rootReducer } from 'src/store/root.reducer';
import history from 'src/configuration/history';

const routerHistoryMiddleware = routerMiddleware(history);

const epicMiddleware = createEpicMiddleware({
  dependencies: {}, // in case for future dependencies
});

export const configureStore = () => {

  const reduxDevToolsExtenstionStart: any = () => (
    (
      process.env.NODE_ENV === 'development' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
    )
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any): any => f
  );

  const store = createStore(
    rootReducer,
    {}, // preloaded store at start
    compose(
      applyMiddleware(...[
        epicMiddleware,
        routerHistoryMiddleware,
      ]),
      reduxDevToolsExtenstionStart()
    )
  );

  epicMiddleware.run(rootEpic);
  return store;
};