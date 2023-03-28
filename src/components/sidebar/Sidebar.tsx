import React from 'react';
import s from './Sidebar.module.css'
import {SidebarTask} from "./SidebarTask";
import {useSelector} from "react-redux";
import {AppRootType} from "../../redux/store";
import {TaskListType} from "../../redux/reducers/tasks-lists-reducer";
import {AddNewTasksList} from "./addNewTasksList/AddNewTasksList";
import {CustomSearch} from "./search/CustomSearch";
import {FilterBlock} from "./filterBlock/FilterBlock";



export const Sidebar = () => {

    const taskLists = useSelector<AppRootType, Array<TaskListType>>(state => state.taskLists)

    const sidebarTasksLists = taskLists.map(tl => {
        return (
                <SidebarTask key={tl.id} taskList={tl}/>
        )
    })

    return (
        <div className={s.sidebar_wrapper}>
            <AddNewTasksList/>
            <CustomSearch/>
            <FilterBlock/>
            <div className={s.sidebar_tasks_wrapper}>
                {sidebarTasksLists}
            </div>
        </div>
    );
};

