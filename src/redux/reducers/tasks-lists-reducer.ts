import {v1} from "uuid";

export const TASK_LIST_ID1 = v1()
export const TASK_LIST_ID2 = v1()
export const TASK_LIST_ID3 = v1()

export type TaskListType = {
    id: string
    title: string
    description: string
    isActive: boolean
    priority: string
}

const initState: Array<TaskListType> = [
    {
        id: TASK_LIST_ID1,
        title: 'React',
        description: 'React React React',
        isActive: true,
        priority: 'Medium',

    },
    {
        id: TASK_LIST_ID2,
        title: 'Redux',
        description: 'Redux ducks',
        isActive: true,
        priority: 'High',
    },
    {
        id: TASK_LIST_ID3,
        title: 'HTML / CSS',
        description: 'HyperText Markup Language',
        isActive: true,
        priority: 'Low',
    }
]
export const tasksListsReducer = (state: Array<TaskListType> = initState, action: any): Array<TaskListType> => {
    return state
}