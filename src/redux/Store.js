import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducer";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
//(window.__REDUX_DEVTOOLS_EXTENSION__ &&
//window.__REDUX_DEVTOOLS_EXTENSION__()
//)
