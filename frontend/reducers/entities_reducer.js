import { combineReducers } from "redux"

import userReducer from "./user_reducer";
import videosReducer from "./videos_reducer";

const entitiesReducer = combineReducers({
    user: userReducer,
    videos: videosReducer
});

export default entitiesReducer;