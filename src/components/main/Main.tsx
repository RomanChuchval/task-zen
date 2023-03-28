import React from 'react';
import s from './Main.module.css'
import {Task} from "./task/Task";
import {useSelector} from "react-redux";
import {AppRootType} from "../../redux/store";
import {TasksStateType} from "../../redux/reducers/tasks-reducer";
import {AppstoreAddOutlined, SortAscendingOutlined, FilterOutlined} from '@ant-design/icons';
import {SuperButton} from "../common/SuperButton";
import {MembersAvatars} from "./members-avatars/MembersAvatars";
import {Statistics} from "./statistics/Statistics";
import {NavLink, useParams} from "react-router-dom";
import {Empty} from 'antd';


export const Main = () => {
    const {id} = useParams()
    const tasksListId = id ? id : ''
    const getTasksListTitle = (state: AppRootType): string => {
        if (tasksListId) {
            const tasksList = state.taskLists.filter(tl => tl.id === tasksListId)
            return tasksList[0].title
        } else {
            return ''
        }
    }
    const taskListTitle = useSelector<AppRootType, string>(getTasksListTitle)
    const tasksArray = useSelector<AppRootType, Array<TasksStateType>>(state => state.tasks[tasksListId])

    const tasks = tasksArray
        ?
        tasksArray.map(task => {
            return (
                <Task key={task.id} taskData={task}/>
            )
        })
        : <Empty description={'Select tasks list for view tasks'}/>

    return (
        <div className={s.main_wrapper}>
            <div>
                <div className={s.main_header}>
                    Task Overview
                </div>
                <div className={s.main_title}>
                    <span className={s.bold_span}>{taskListTitle}</span>
                    <div className={s.main_members_block}>
                        <span>Members </span>
                        <MembersAvatars/>
                    </div>
                </div>
                <div className={s.main_settings}>
                    <SuperButton btnType={"primary"} callback={() => {
                    }}><AppstoreAddOutlined/>Add New Task</SuperButton>
                    <SuperButton btnType={"primary"} callback={() => {
                    }}><FilterOutlined/>Filter</SuperButton>
                    <SuperButton btnType={"primary"} callback={() => {
                    }}><SortAscendingOutlined/>Sort</SuperButton>
                </div>
            </div>
            <div className={s.main_tasks_wrapper}>
                <div className={`${tasksArray ? s.main_tasks : s.main_empty}`}>
                    <div className={s.tasks_list_header}>
                        {tasksArray &&
                            <>
                                <span>Tasks</span>
                                <NavLink to={'/'}>
                                    <SuperButton btnType={"primary"} btnSize={"small"} callback={() => {
                                    }}>x</SuperButton>
                                </NavLink>
                            </>
                        }
                    </div>
                    <div className={s.tasks_list}>
                        {tasks}
                    </div>
                </div>
                {tasksArray && <Statistics/>}
            </div>

        </div>
    );
};

