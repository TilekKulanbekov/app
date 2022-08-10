import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import staticData from "./reducers/staticData";
import jsServices from "./reducers/jService";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    staticData,
    jsServices
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;