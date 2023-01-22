import {
     applyMiddleware,
     combineReducers,
     legacy_createStore,
     compose,
} from "redux";
import thunk from "redux-thunk";

import { reducer as Appreducer } from "./AppReducer/reducer";
// import { reducer as Authreducer } from "./AuthReducer/reducer";
const root_reducer = combineReducers({ Appreducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
     root_reducer,
     composeEnhancers(applyMiddleware(thunk))
);

export { store };
