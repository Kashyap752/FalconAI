import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./reducers/home";

const rootReducer = combineReducers({
    home: homeReducer
});
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;