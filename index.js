// creating a state for redux store
const redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE = "BUY_ICE";
// action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}
function buyIce() {
  return {
    type: BUY_ICE,
  };
}
// initial value of state
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIce: 20,
// };
const initialCakeState = {
  numberOfCakes: 10,
};
const initialIceState = {
  numberOfIce: 20,
};

// reducer method
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1,
//       };
//     case BUY_ICE:
//       return {
//         ...state,
//         numberOfIce: state.numberOfIce - 1,
//       };
//     default:
//       return state;
//   }
// };
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};
const iceReducer = (state = initialIceState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numberOfIce: state.numberOfIce - 1,
      };
    default:
      return state;
  }
};

// combining acion,reducer,by writing redux store

// COMBINING MULTIPLE REDUCER FUNCTION
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
});
// passing above reducer
const store = redux.createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIce());
store.dispatch(buyIce());
unsubscribe();
