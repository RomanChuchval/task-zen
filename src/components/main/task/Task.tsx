import React, {FC} from 'react';
import s from './Task.module.css'
import {SuperCheckbox} from "../../common/SuperCheckbox";
import {TasksStateType} from "../../../redux/reducers/tasks-reducer";
import {Badge, Button} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';

type TaskPropsType = {
    taskData: TasksStateType
}

export const Task: FC<TaskPropsType> = (
    {
        taskData
    }
) => {

    const getBadgeColor = () => {
        if (taskData.priority === 'High') {
            return '#f5222d'
        } else if (taskData.priority === 'Medium') {
            return '#faad14'
        } else {
            return '#52c41a'
        }
    }
    const badgeColor = getBadgeColor()

    return (
        <div className={s.task_wrapper}>
            <div className={s.task}>
                <div className={s.task_priority}>
                    <Badge color={badgeColor} text={taskData.priority}/>
                    <button><EditOutlined/></button>
                </div>

                <div className={s.task_title}>{taskData.title}</div>
                <div className={s.task_description}>{taskData.description}</div>
            </div>
            <div className={s.task_actions}>
                <SuperCheckbox isChecked={taskData.isActive} callback={() => {
                }}/>
                <Button size={'small'} type={'primary'} icon={<DeleteOutlined/>}>Remove</Button>
            </div>
        </div>
    );
};
