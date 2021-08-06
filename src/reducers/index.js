import { combineReducers } from "redux";

import userReducer from "./userReducer";

import articleReducer from "./airticleReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});

export default rootReducer;
