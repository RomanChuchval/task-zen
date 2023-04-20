import {
    REMOVE_TASKS_LIST,
    RemoveTasksListActionType,
    TASK_LIST_ID1,
    TASK_LIST_ID2,
    TASK_LIST_ID3,
    TASK_LIST_ID4,
    TASK_LIST_ID5
} from "./tasks-lists-reducer";
import {v1} from "uuid";
import {PriorityTypes} from "./filter-reducer";


const initState: RootTasksStateType = {
    [TASK_LIST_ID1]: [
        {
            id: v1(),
            title: 'Components',
            isDone: true,
            description: 'React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.\n' +
                '\n' +
                'React components are JavaScript functions that return markup:',
            priority: 'Low'
        },
        {
            id: v1(),
            title: 'Optimization',
            isDone: true,
            description: 'Read about optimization with useMemo, useCallback, React.memo and other...',
            priority: 'High'
        },
        {
            id: v1(),
            title: 'Thinking in React',
            isDone: false,
            description: 'React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.',
            priority: 'Medium'
        },
        {
            id: v1(),
            title: 'Managing State',
            isDone: false,
            description: 'As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components. ',
            priority: 'Medium'
        },
    ],
    [TASK_LIST_ID2]: [
        {
            id: v1(),
            title: 'React-redux',
            isDone: true,
            description: 'React Redux is maintained by the Redux team, and kept up-to-date with the latest APIs from Redux and React.',
            priority: 'Medium'
        },
        {
            id: v1(),
            title: 'Redux',
            isDone: false,
            description: 'Welcome to the Redux Essentials tutorial! This tutorial will introduce you to Redux and teach you how to use it the right way, using our latest recommended tools and best practices. By the time you finish, you should be able to start building your own Redux applications using the tools and patterns you\'ve learned here.',
            priority: 'High'
        },
        {
            id: v1(),
            title: 'Redux saga',
            isDone: false,
            description: 'redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.',
            priority: 'Low'
        }
    ],
    [TASK_LIST_ID3]: [
        {
            id: v1(),
            title: 'HTML',
            isDone: true,
            description: 'read what is HTML and how it work with JS',
            priority: 'Low'
        },
        {
            id: v1(),
            title: 'CSS',
            isDone: true,
            description: 'read and learn about cascading style sheets',
            priority: 'Medium'
        },
        {
            id: v1(),
            title: 'SASS',
            isDone: false,
            description: 'learn about preprocessing frameworks',
            priority: 'Medium'
        }
    ],
    [TASK_LIST_ID4]: [
        {
            id: v1(),
            title: 'Clean Code',
            isDone: false,
            description: 'Robert Cecil Martin Recommended by the Codemotion Community on Instagram The book\'s full title is Clean Code – A Handbook of Agile Software',
            priority: 'High'
        },
        {
            id: v1(),
            title: 'JavaScript: The Good Parts',
            isDone: true,
            description: 'With JavaScript: The Good Parts, author Douglas Crockford focuses on the basics of some of the lesser-known yet desirable aspects of JavaScript.',
            priority: 'Medium'
        },
        {
            id: v1(),
            title: 'You Don\'t Know JS: Scope & Closures',
            isDone: false,
            description: 'Writing complex programs Classes, closures, persistence, Flash, and JavaScript embedded in Java applications; DOM scripting. You Don\'t Know JS by Kyle Simpson.',
            priority: 'High'
        },
        {
            id: v1(),
            title: 'Head First JavaScript Programming: A Brain-Friendly Guide',
            isDone: false,
            description: 'Head First JavaScript Programming: A Brain-Friendly Guide. 882. 63 offers from $17.29 · #12 · Learn JavaScript Quickly: A Complete Beginner\'s Guide',
            priority: 'Low'
        },

    ],
    [TASK_LIST_ID5]: [
        {
            id: v1(),
            title: 'IT-KAMASUTRA',
            isDone: true,
            description: 'Top YouTube Channel with great React Samurai-way course :)',
            priority: 'High'
        },
        {
            id: v1(),
            title: 'IT-INCUBATOR',
            isDone: true,
            description: 'YouTube channel about IT-INCUBATOR and IT-News',
            priority: 'Medium'
        },
        {
            id: v1(),
            title: 'Hexlet',
            isDone: false,
            description: 'Hexlet school YouTube Channel',
            priority: 'Low'
        }
    ],
}
export const tasksReducer = (state: RootTasksStateType = initState, action: TasksActionsTypes): RootTasksStateType => {
    switch (action.type) {
        case CHANGE_TASK_STATUS:
            return {
                ...state, [action.payload.tasksListId]:
                    state[action.payload.tasksListId].map(t => t.id === action.payload.taskId
                        ? {...t, isDone: action.payload.newTaskStatus}
                        : t)
            }
        case REMOVE_TASK:
            return {
                ...state, [action.payload.tasksListId]:
                    state[action.payload.tasksListId].filter(t => t.id !== action.payload.taskId)
            }
        case REMOVE_TASKS_LIST:
            let stateCopy = {...state}
            delete stateCopy[action.payload.id]
            return stateCopy
        case CREATE_TASK:
            const newTask = {
                id: action.payload.taskId,
                title: action.payload.data.taskTitle,
                isDone: false,
                description: action.payload.data.taskDescription,
                priority: action.payload.data.taskPriority
            }
            return {...state, [action.payload.tasksListId]: [newTask, ...state[action.payload.tasksListId]]}
        default:
            return state
    }
}

const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS'
const REMOVE_TASK = "REMOVE_TASK"
const CREATE_TASK = "CREATE_TASK"
export const changeTaskStatusAC = (newTaskStatus: boolean, tasksListId: string, taskId: string) => {
    return {
        type: CHANGE_TASK_STATUS,
        payload: {
            newTaskStatus,
            tasksListId,
            taskId
        }
    } as const
}

export const removeTaskAC = (tasksListId: string, taskId: string) => {
    return {
        type: REMOVE_TASK,
        payload: {
            tasksListId,
            taskId
        }
    } as const
}

export const createTaskAC = (tasksListId: string, data: CreateNewTaskDataType) => {
    return {
        type: CREATE_TASK,
        payload: {
            taskId: v1(),
            tasksListId,
            data
        }
    } as const
}


// TYPES
export type RootTasksStateType = {
    [key: string]: Array<TasksStateType>
}
export type CreateNewTaskDataType = {
    taskTitle: string,
    taskDescription: string,
    taskPriority: PriorityTypes
}
export type TasksStateType = {
    id: string
    title: string
    isDone: boolean
    description: string
    priority: PriorityTypes
}

type TasksActionsTypes = ReturnType<typeof changeTaskStatusAC>
    | ReturnType<typeof removeTaskAC>
    | RemoveTasksListActionType
    | ReturnType<typeof createTaskAC>