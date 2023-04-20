import {AppRootType} from "../../redux/store";

export const getTasksListTitle = (state: AppRootType, tasksListIdParams: string): string | undefined => {
    if (tasksListIdParams) {
        const tasksList = state.taskLists.filter(tl => tl.id === tasksListIdParams)
        return tasksList[0] ? tasksList[0].title : ''
    }
}