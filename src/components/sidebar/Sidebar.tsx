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
import {filterData} from "../../utils/getFilteredData";


export const Sidebar = () => {
    const taskLists = useSelector<AppRootType, Array<TaskListType>>((state) => state.taskLists)
    const priorityFilters = useSelector<AppRootType, Array<PriorityTypes>>(state => state.filters.tasksLists.priorityFilter)
    const statusFilter = useSelector<AppRootType, boolean | null>(state => state.filters.tasksLists.isDoneFilter)
    const tasksListsForRender = filterData<TaskListType>(taskLists, priorityFilters, statusFilter)


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

