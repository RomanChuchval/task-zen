import React from 'react';
import s from './Sidebar.module.css'
import {SidebarTask} from "./SidebarTask";
import {useSelector} from "react-redux";
import {AppRootType} from "../../redux/store";
import {TaskListType} from "../../redux/reducers/tasks-lists-reducer";
import {AddNewTasksList} from "./addNewTasksList/AddNewTasksList";
import {CustomSearch} from "./search/CustomSearch";
import {FilterBlock} from "./filterBlock/FilterBlock";
import {PriorityTypes} from "../../redux/reducers/filter-reducer";


export const Sidebar = () => {

    const taskLists = useSelector<AppRootType, Array<TaskListType>>(state => state.taskLists)
    const priorityFiltersArray = useSelector<AppRootType, Array<PriorityTypes>>(state => state.filters.priorityFilter)
    const statusFilter = useSelector<AppRootType, boolean | null>(state => state.filters.statusFilter)

    const filterTasksLists = () => {
        let filteredTasksLists = taskLists
        if(!priorityFiltersArray.length && statusFilter === null) {
            return filteredTasksLists
        } else {
            if (statusFilter === null) {
                filteredTasksLists = taskLists.filter(tl => priorityFiltersArray.includes(tl.priority))
            } else if (!priorityFiltersArray.length) {
                filteredTasksLists = taskLists.filter(el => el.isDone === statusFilter)
            }
            else {
                let filteredForPriority: Array<TaskListType> = taskLists.filter(tl => priorityFiltersArray.includes(tl.priority))
                filteredTasksLists = filteredForPriority.filter(el => el.isDone === statusFilter)
            }
        }
        return filteredTasksLists
    }
    const tasksListsForRender = filterTasksLists()


    const sidebarTasksLists = tasksListsForRender.map(tl => {
        return (
                <SidebarTask key={tl.id} taskList={tl}/>
        )
    })

    return (
        <div className={s.sidebar_wrapper}>
            <AddNewTasksList/>
            <CustomSearch/>
            <FilterBlock tasksLists={tasksListsForRender}/>
            <div className={s.sidebar_tasks_wrapper}>
                {sidebarTasksLists}
            </div>
        </div>
    );
};

