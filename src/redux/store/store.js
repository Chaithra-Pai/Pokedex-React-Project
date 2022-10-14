import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from '../reducer/rootReducer';

export default function ConfigureStore() {
    const middleware = [ thunkMiddleware ];
    const middlewareEnhancer = applyMiddleware(...middleware);
    const store = createStore(rootReducer, middlewareEnhancer);
    return store;
}