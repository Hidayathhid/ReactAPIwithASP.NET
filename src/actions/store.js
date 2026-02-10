// import { createStore, applyMiddleware, compose } from "redux";
// import { thunk } from "redux-thunk";
// import Reducer from "../reducers";
// import reducers from "../reducers";

// export const store = createStore(
//   // rootReducer,
//   reducers,
//   compose(applyMiddleware(thunk)),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
// );

// import { createStore, applyMiddleware, compose } from "redux";
// import {thunk} from "redux-thunk";
// import reducers from "../reducers";

// export const store = createStore(
//   reducers,
//   compose(applyMiddleware(thunk)),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // named import
import reducers from "../reducers";

// Combine Redux DevTools with middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers, //testing
  composeEnhancers(applyMiddleware(thunk)) // ✅ only one enhancer
);

//testing for github code is push.