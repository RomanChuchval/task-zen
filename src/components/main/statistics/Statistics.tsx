import React from 'react';
import s from "./Statistics.module.css";
import {Progress} from "antd";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootType} from "../../../redux/store";
import {TasksStateType} from "../../../redux/reducers/tasks-reducer";

export const Statistics = () => {

    const {id} = useParams()
    const tasksListId = id ? id : ''

    const tasksArray = useSelector<AppRootType, Array<TasksStateType>>(state => state.tasks[tasksListId])
    const getCompletedProgressCount = () => {
        const completedTasksCount = tasksArray.filter(t => t.isDone).length
        const AllTasksCount = tasksArray.length
        return Math.floor((completedTasksCount / AllTasksCount) * 100)
    }
    const progressPercent = getCompletedProgressCount()

    return (
        <div className={s.main_tasks_stats}>
            <span className={s.bold_span}>Progress</span>
            <Progress type="circle" size={120} percent={progressPercent} />
        </div>
    );
};

