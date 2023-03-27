import {combineReducers, legacy_createStore} from "redux";
import {taskListReducer} from "./reducers/task-list-reducer";


const rootReducer = combineReducers({
    taskLists: taskListReducer
})


export type AppRootType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)
