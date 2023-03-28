import {TASK_LIST_ID1, TASK_LIST_ID2, TASK_LIST_ID3} from "./tasks-lists-reducer";
import {v1} from "uuid";


export type RootTasksStateType = {
    [key: string] : Array<TasksStateType>
}
export type TasksStateType = {
    id: string
    title: string
    isActive: boolean
    description: string
    priority: string
}


const initState: RootTasksStateType = {
    [TASK_LIST_ID1]: [
        {
            id: v1(),
            title: 'Components',
            isActive: true,
            description: 'description',
            priority: 'Low'
        },
        {
            id: v1(),
            title: 'Optimization',
            isActive: true,
            description: 'description description description',
            priority: 'High'
        },
        {
            id: v1(),
            title: 'FLUX',
            isActive: false,
            description: 'description description',
            priority: 'Medium'
        },
    ],
    [TASK_LIST_ID2]: [
        {
            id: v1(),
            title: 'react-redux',
            isActive: true,
            description: 'React Redux is maintained by the Redux team, and kept up-to-date with the latest APIs from Redux and React.',
            priority: 'Medium'
        },
        {
            id: v1(),
            title: 'Redux',
            isActive: false,
            description: 'Welcome to the Redux Essentials tutorial! This tutorial will introduce you to Redux and teach you how to use it the right way, using our latest recommended tools and best practices. By the time you finish, you should be able to start building your own Redux applications using the tools and patterns you\'ve learned here.',
            priority: 'High'
        },
        {
            id: v1(),
            title: 'Redux saga',
            isActive: false,
            description: 'redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.',
            priority: 'Low'
        },
        {
            id: v1(),
            title: 'Redux saga',
            isActive: false,
            description: 'redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.',
            priority: 'Low'
        },
        {
            id: v1(),
            title: 'Redux saga',
            isActive: false,
            description: 'redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.',
            priority: 'Low'
        },
        {
            id: v1(),
            title: 'Redux saga',
            isActive: false,
            description: 'redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.',
            priority: 'Low'
        },{
            id: v1(),
            title: 'Redux saga',
            isActive: false,
            description: 'redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.',
            priority: 'Low'
        },
        {
            id: v1(),
            title: 'Redux saga',
            isActive: false,
            description: 'redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.',
            priority: 'Low'
        },



    ],
    [TASK_LIST_ID3]: [
        {
            id: v1(),
            title: 'HTML',
            isActive: true,
            description: 'string string string string string',
            priority: 'Medium'
        },
        {
            id: v1(),
            title: 'CSS',
            isActive: true,
            description: 'string string string string string',
            priority: 'Medium'
        },
        {
            id: v1(),
            title: 'SASS',
            isActive: false,
            description: 'string string string string string',
            priority: 'Low'
        }
    ]
}
export const tasksReducer = (state: RootTasksStateType = initState, action: any): RootTasksStateType => {
    return state
}
