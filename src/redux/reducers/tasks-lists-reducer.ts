import {v1} from "uuid";

export const TASK_LIST_ID1 = '1'
export const TASK_LIST_ID2 = '2'
export const TASK_LIST_ID3 = '3'

export type TaskListType = {
    id: string
    title: string
    description: string
    isDone: boolean
    priority: string
}

const initState: Array<TaskListType> = [
    {
        id: TASK_LIST_ID1,
        title: 'React',
        description: 'React React React',
        isDone: true,
        priority: 'Medium',

    },
    {
        id: TASK_LIST_ID2,
        title: 'Redux',
        description: 'Redux ducks',
        isDone: false,
        priority: 'High',
    },
    {
        id: TASK_LIST_ID3,
        title: 'HTML / CSS',
        description: 'HyperText Markup Language',
        isDone: true,
        priority: 'Low',
    }
]
export const tasksListsReducer = (state: Array<TaskListType> = initState, action: ActionsType): Array<TaskListType> => {
        switch(action.type) {
            case CHANGE_TASKS_LIST_STATUS:
                return state.map(tl => tl.id === action.payload.taskListId
                ? {...tl, isDone: action.payload.newStatus}
                : tl)
        }
    return state
}


type ActionsType = ReturnType<typeof changeTasksListStatusAC>


const CHANGE_TASKS_LIST_STATUS = 'CHANGE_TASKS_LIST_STATUS'
export const changeTasksListStatusAC = (newStatus: boolean, taskListId: string) => {
    return {
        type: CHANGE_TASKS_LIST_STATUS,
        payload: {
            newStatus,
            taskListId
        }
    } as const
}