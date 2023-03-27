import React, {FC} from 'react';
import s from './SidebarTask.module.css'
import {Badge} from 'antd';
import {TaskListType} from "../../redux/reducers/task-list-reducer";
import {SuperCheckbox} from "../common/SuperCheckbox";


type SidebarTaskPropsType = {
    taskList: TaskListType
}

export const SidebarTask: FC <SidebarTaskPropsType> = (
    {
        taskList
    }
) => {

    const getBadgeColor = () => {
        if(taskList.priority === 'High') {
            return '#f5222d'
        } else if (taskList.priority === 'Medium') {
            return '#faad14'
        } else {
            return '#52c41a'
        }
    }
    const badgeColor = getBadgeColor()


    return (
        <Badge.Ribbon text={taskList.priority} color={badgeColor}>
        <div className={s.sidebar_task_wrapper}>
            <div>{taskList.title}</div>
               <span className={s.sidebar_task_description}>
                   {taskList.description}
               </span>
                <div className={s.sidebar_task_status}>
                    <SuperCheckbox isChecked={taskList.isActive} callback={()=>{}} />
                </div>
        </div>
        </Badge.Ribbon>
    );
};

