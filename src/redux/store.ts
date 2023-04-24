import {combineReducers, legacy_createStore} from "redux";
import {tasksListsReducer} from "./reducers/tasks-lists-reducer";
import {tasksReducer} from "./reducers/tasks-reducer";
import {filterReducer} from "./reducers/filter-reducer";
import {appReducer} from "./reducers/app-reducer";
import {loadState, saveState} from "../utils/localstorage-util";


const rootReducer = combineReducers({
    taskLists: tasksListsReducer,
    tasks: tasksReducer,
    filters: filterReducer,
    app: appReducer
})
export const store = legacy_createStore(rootReducer, loadState())


store.subscribe(() => {
    saveState({
        taskLists: store.getState().taskLists,
        tasks: store.getState().tasks,
        filters: store.getState().filters,
        app: store.getState().app
    });
});

export type AppRootType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store