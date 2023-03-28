import React, {memo} from 'react';
import {SuperButton} from "../../common/SuperButton";
import s from "./FilterBlock.module.css";
import {useSelector} from "react-redux";
import {AppRootType} from "../../../redux/store";
import {TaskListType} from "../../../redux/reducers/tasks-lists-reducer";

export const FilterBlock = memo(() => {
    const tasksLists = useSelector<AppRootType, Array<TaskListType>>(state => state.taskLists)

    const getLowPriorityTasksList = () => tasksLists.filter(el => el.priority === 'Low').length
    const lowPriorityCount =  getLowPriorityTasksList()
    const getMediumPriorityTasksList = () => tasksLists.filter(el => el.priority === 'Medium').length
    const middlePriorityCount = getMediumPriorityTasksList()
    const getHighPriorityTasksList = () => tasksLists.filter(el => el.priority === 'High').length
    const highPriorityCount = getHighPriorityTasksList()
    const getActiveTasksList = () => tasksLists.filter(el => !el.isDone).length
    const activeTasksListCount = getActiveTasksList()
    const getDoneTasksList = () => tasksLists.filter(el => el.isDone).length
    const doneTasksListCount = getDoneTasksList()
    const allTasksListCount = tasksLists.length


    return (
        <>
            <div className={s.sidebar_filter}>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>{}}
                             badgeSize={"small"} badgeCount={lowPriorityCount} btnColor={"#52c41a"} withBadge={true}>
                    Low
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>{}}
                             badgeSize={"small"} badgeCount={middlePriorityCount} btnColor={"#faad14"} withBadge={true}>
                    Medium
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>{}}
                             badgeSize={"small"} badgeCount={highPriorityCount} btnColor={"#f5222d"} withBadge={true}>
                    High
                </SuperButton>
            </div>
            <div className={s.sidebar_filter}>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>{}}
                             badgeSize={"small"} badgeCount={allTasksListCount} withBadge={true}>
                    All
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>{}}
                             badgeSize={"small"} badgeCount={activeTasksListCount} withBadge={true} >
                    Active
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>{}}
                             badgeSize={"small"} badgeCount={doneTasksListCount} withBadge={true}>
                    Completed
                </SuperButton>
            </div>
        </>
    );
});

