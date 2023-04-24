import React, {FC} from 'react';
import s from "./Statistics.module.css";
import {Progress} from "antd";
import {TasksStateType} from "../../../redux/reducers/tasks-reducer";

type StatisticsPropsType = {
    tasks: TasksStateType[]
}

export const Statistics: FC<StatisticsPropsType> = ({ tasks }) => {

    const getCompletedProgressCount = () => {
        const completedTasksCount = tasks.filter(t => t.isDone).length
        const AllTasksCount = tasks.length
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

