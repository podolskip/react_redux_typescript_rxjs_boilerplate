import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { rootReducer } from 'src/store/root.reducer';
import { routerMiddleware } from 'react-router-redux';
import history from './history';

const routerHostoryMiddleware = routerMiddleware(history);

export const configureStore = () => {

  const reduxDevToolsExtenstionStart: any = () => (
    (window as any).devToolsExtension
      ? (window as any).devToolsExtension()
      : (f: any): any => f
  );

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...[routerHostoryMiddleware]),
      reduxDevToolsExtenstionStart()
    )
  );
  return store;
}