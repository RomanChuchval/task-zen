import React from 'react';
import s from './Main.module.css'
import {Task} from "./task/Task";
import {useSelector} from "react-redux";
import {AppRootType} from "../../redux/store";
import {TasksStateType} from "../../redux/reducers/tasks-reducer";
import {AntDesignOutlined, AppstoreAddOutlined, UserOutlined, SortAscendingOutlined, FilterOutlined} from '@ant-design/icons';
import {Avatar, Button, Tooltip, Progress} from 'antd';


export const Main = () => {
    const taskListId = useSelector<AppRootType, string>(state => state.taskLists[1].id)
    const taskListTitle = useSelector<AppRootType, string>(state => state.taskLists[1].title)
    const tasksArray = useSelector<AppRootType, Array<TasksStateType>>(state => state.tasks[taskListId])

    const tasks = tasksArray.map(task => {
        return(
            <Task taskData={task} />
        )
    })

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
                        <Avatar.Group
                            maxCount={3}
                            size="large"
                            maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                        >
                            <Avatar style={{ backgroundColor: '#6379d9' }}>NK</Avatar>
                            <Avatar style={{ backgroundColor: '#f56a00' }}>VA</Avatar>
                            <Tooltip title="Ant User" placement="top">
                                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                            </Tooltip>
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Avatar.Group>
                    </div>
                </div>
                <div className={s.main_settings}>
                    <Button size={'small'} type={'primary'} icon={<AppstoreAddOutlined />}>Add New Task</Button>
                    <Button size={'small'} type={'primary'} icon={<FilterOutlined />}>Filter</Button>
                    <Button size={'small'} type={'primary'} icon={<SortAscendingOutlined />}>Sort</Button>
                </div>
            </div>
            <div className={s.main_tasks_wrapper}>
                <div className={s.main_tasks}>
                    <div className={s.tasks_list_header}>
                        Tasks
                    </div>
                    <div className={s.tasks_list}>
                        {tasks}
                    </div>
                </div>
                <div className={s.main_tasks_stats}>
                    <span className={s.bold_span}>Progress</span>
                    <Progress type="circle" percent={33} />
                    <Progress type="circle" percent={70} status="exception" />
                    <Progress type="circle" percent={100} />
                </div>
            </div>

        </div>
    );
};

