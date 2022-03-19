import { combineReducers } from "redux";

import { searchRobotsReducer } from "./searchRobotsReducer";
import { requestRobotsReducer } from "./requestRobotsReducer";

export const rootReducer = combineReducers({
    searchRobotsReducer,
    requestRobotsReducer,
});
