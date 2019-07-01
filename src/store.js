import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import { watchAgeUp } from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchAgeUp);

export const configureStore = () => {
    return store
}
