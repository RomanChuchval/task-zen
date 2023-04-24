import {PriorityTypes} from "./filter-reducer";
import {CreateNewEntityDataType} from "./tasks-reducer";
import {v1} from "uuid";
import moment from "moment/moment";

//CONSTANTS
export const TASK_LIST_ID1 = '1'
export const TASK_LIST_ID2 = '2'
export const TASK_LIST_ID3 = '3'
export const TASK_LIST_ID4 = '4'
export const TASK_LIST_ID5 = '5'
const CHANGE_TASKS_LIST_STATUS = 'CHANGE_TASKS_LIST_STATUS'
export const REMOVE_TASKS_LIST = 'REMOVE_TASKS_LIST'
export const CREATE_TASKS_LIST = 'CREATE_TASKS_LIST'

//REDUCER
const initState: Array<TaskListType> = [
    {
        id: TASK_LIST_ID1,
        title: 'Learn React',
        description: 'learn how to React work',
        isDone: true,
        priority: 'High',
        addedDate: '20.04.2023 12:04'

    },
    {
        id: TASK_LIST_ID2,
        title: 'Redux',
        description: 'learn how to Redux work. How to create actions and how to use dispatch',
        isDone: false,
        priority: 'High',
        addedDate: '12.03.2023 09:00'
    },
    {
        id: TASK_LIST_ID3,
        title: 'HTML / CSS',
        description: 'learn how to make adaptive and responsive design',
        isDone: true,
        priority: 'Low',
        addedDate: '09.03.2023 15:32'
    },
    {
        id: TASK_LIST_ID4,
        title: 'Books for Development',
        description: 'Books for reading and improving skills',
        isDone: false,
        priority: 'Medium',
        addedDate: '09.02.2023 14:25'
    },
    {
        id: TASK_LIST_ID5,
        title: 'YouTube',
        description: 'Helpful YouTube channels with useful information',
        isDone: false,
        priority: 'Low',
        addedDate: '30.01.2023 19:08'
    }

]
export const tasksListsReducer = (state: Array<TaskListType> = initState, action: TasksListActionsTypes): Array<TaskListType> => {
    switch (action.type) {
        case CHANGE_TASKS_LIST_STATUS:
            return state.map(tl => tl.id === action.payload.taskListId
                ? {...tl, isDone: action.payload.newStatus}
                : tl)
        case REMOVE_TASKS_LIST:
            return state.filter(tl => tl.id !== action.payload.id)
        case CREATE_TASKS_LIST:
            const newTasksList = {
                id: action.payload.id,
                title: action.payload.data.title,
                description: action.payload.data.description,
                isDone: false,
                priority: action.payload.data.priority,
                addedDate: moment().format('DD.MM.YYYY HH:mm')
            }
            return [newTasksList, ...state]
        default:
            return state
    }
}


//ACTION_CREATORS
export const changeTasksListStatusAC = (newStatus: boolean, taskListId: string) => {
    return {
        type: CHANGE_TASKS_LIST_STATUS,
        payload: {
            newStatus,
            taskListId
        }
    } as const
}

export const removeTasksListAC = (id: string) => {
    return {
        type: REMOVE_TASKS_LIST,
        payload: {
            id
        }
    } as const
}

export const createTasksListAC = (data: CreateNewEntityDataType) => (
    {type: CREATE_TASKS_LIST, payload: {data, id: v1()}} as const
)

// TYPES
export type TaskListType = {
    id: string
    title: string
    description: string
    isDone: boolean
    priority: PriorityTypes
    addedDate: string
}
export type RemoveTasksListActionType = ReturnType<typeof removeTasksListAC>
export type CreateTasksListActionType = ReturnType<typeof createTasksListAC>
type TasksListActionsTypes = ReturnType<typeof changeTasksListStatusAC>
    | RemoveTasksListActionType
    | CreateTasksListActionType