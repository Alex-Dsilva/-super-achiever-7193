import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import {reducer as Appreducer} from './AppReducer/reducer'
import {reducer as Authreducer} from './AuthReducer/reducer'
const root_reducer = combineReducers({Appreducer,Authreducer})
const store = legacy_createStore(root_reducer,applyMiddleware(thunk))

export{store}