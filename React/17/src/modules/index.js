import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import todos from "./todos";
import sample, { sampleSaga } from "./sample";
import loading from "./loading";
import users, { usersSaga } from "./users";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
  users,
});
export function* rootSaga() {
  yield all([counterSaga(), sampleSaga(), usersSaga()]);
}

export default rootReducer;
