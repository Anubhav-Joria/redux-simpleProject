//We will create several reducers in reducer folder but all the reducers will later be stored in a single reducer function that we will define in index.js

import changeNumber from "./incDec"
import {combineReducers} from "redux"

const rootReducer = combineReducers({changeNumber})

export default rootReducer;
