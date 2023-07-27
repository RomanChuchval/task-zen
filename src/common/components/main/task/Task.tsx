import React, {FC, memo} from 'react';
import s from 'common/components/main/task/Task.module.css'
import {SuperCheckbox} from "common/components/CustomCheckbox/SuperCheckbox";
import {changeTaskStatusAC, removeTaskAC, TasksStateType} from "redux/reducers/tasks-reducer";
import {Badge} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {useDispatch} from "react-redux";
import {SuperButton} from "common/components/CustomButton/SuperButton";

type TaskPropsType = {
    taskData: TasksStateType
    tasksListId: string
}

export const Task: FC<TaskPropsType> = memo((
    {
        taskData,
        tasksListId
    }
) => {
    const dispatch = useDispatch()
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
    const changeTaskStatusHandler = (e: CheckboxChangeEvent) => {
        dispatch(changeTaskStatusAC(e.target.checked, tasksListId, taskData.id))
    }
    const removeTaskHandler = () => {
        dispatch(removeTaskAC(tasksListId, taskData.id ))
    }

    return (
        <div className={s.task_wrapper}>
            <div className={s.task}>
                <div className={s.task_priority}>
                    <Badge color={badgeColor} text={taskData.priority}/>
                    <SuperButton btnType={'text'} btnSize={'small'}><EditOutlined/></SuperButton>
                </div>
                <div className={s.task_title}>{taskData.title}</div>
                <div className={s.task_description}>{taskData.description}</div>
            </div>
            <div className={s.task_actions}>
                <SuperCheckbox isChecked={taskData.isDone} callback={(e) => changeTaskStatusHandler(e)}/>
                <SuperButton btnType={"primary"}
                             btnSize={"small"}
                             callback={removeTaskHandler}
                ><DeleteOutlined/>Remove</SuperButton>
            </div>
        </div>
    );
});
