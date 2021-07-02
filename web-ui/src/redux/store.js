import { createStore, combineReducers,compose } from "redux";
import authReducer from "./reducer/authReducer";

const reducer = combineReducers({
  authReducer,
});

const store = createStore(
  reducer,
  process.env.NODE_ENV !== "production" &&
      typeof window === "object" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION__({})
      : compose
);

export default store;
