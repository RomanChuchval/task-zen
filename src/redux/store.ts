import {combineReducers, legacy_createStore} from "redux";
import {tasksListsReducer} from "./reducers/tasks-lists-reducer";
import {tasksReducer} from "./reducers/tasks-reducer";
import {filterReducer} from "./reducers/filter-reducer";


const rootReducer = combineReducers({
    taskLists: tasksListsReducer,
    tasks: tasksReducer,
    filters: filterReducer
})

export type AppRootType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)
