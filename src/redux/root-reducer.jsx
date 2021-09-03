import { combineReducers } from "redux";
import productsReducers from "../reducers/reducer";
import catalogsReducers from "../reducers/reducer2";

const rootReducer = combineReducers({
  data: productsReducers,
  data2:catalogsReducers
});

export default rootReducer;
