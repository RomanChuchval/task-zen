import React, {FC} from 'react';
import s from 'common/components/sidebar/SidebarTask.module.css'
import {Badge} from 'antd';
import {changeTasksListStatusAC, removeTasksListAC, TaskListType} from "redux/reducers/tasks-lists-reducer";
import {SuperCheckbox} from "common/components/CustomCheckbox/SuperCheckbox";
import {NavLink, useMatch, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {SuperButton} from "common/components/CustomButton/SuperButton";
import {DeleteOutlined} from "@ant-design/icons";


type SidebarTaskPropsType = {
    taskList: TaskListType
}

export const SidebarTask: FC<SidebarTaskPropsType> = (
    {
        taskList
    }
) => {
    const dispatch = useDispatch()
    const match = useMatch(taskList.id)
    const navigate = useNavigate()
    const getBadgeColor = () => {
        if (taskList.priority === 'High') {
            return '#f5222d'
        } else if (taskList.priority === 'Medium') {
            return '#faad14'
        } else {
            return '#52c41a'
        }
    }
    const badgeColor = getBadgeColor()
    const activeCardClass = `${s.sidebar_task_wrapper} ${match ? s.sidebar_task_wrapper_active : ''}`

    const onChangeHandler = (e: CheckboxChangeEvent) => {
        dispatch(changeTasksListStatusAC(e.target.checked, taskList.id))
    }

    const removeTasksListHandler = () => {
        dispatch(removeTasksListAC(taskList.id))
        navigate('/')
    }

    return (
        <Badge.Ribbon text={taskList.priority} color={badgeColor}>
            <div className={activeCardClass}>
                <NavLink key={taskList.id} to={`/${taskList.id}`} className={s.navLink}>
                        <div>{taskList.title}</div>
                        <span className={s.sidebar_task_description}>{taskList.description}</span>
                </NavLink>
                <div className={s.sidebar_task_status}>
                    <SuperCheckbox isChecked={taskList.isDone} callback={(e)=>onChangeHandler(e)}/>
                        <SuperButton btnType={'primary'} btnSize={'small'} callback={removeTasksListHandler} >
                            <DeleteOutlined />
                        </SuperButton>
                </div>
                <span className={s.sidebar_added_at}>Added at: {taskList.addedDate}</span>
            </div>
        </Badge.Ribbon>
    );
};

