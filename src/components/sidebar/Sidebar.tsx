import React from 'react';
import s from './Sidebar.module.css'
import Search from "antd/es/input/Search";
import {Badge, Button} from "antd";
import {SidebarTask} from "./SidebarTask";
import {useSelector} from "react-redux";
import {AppRootType} from "../../redux/store";
import {TaskListType} from "../../redux/reducers/task-list-reducer";


export const Sidebar = () => {

    const taskLists = useSelector<AppRootType, Array<TaskListType>>(state => state.taskLists)

    const sidebarTasksLists = taskLists.map(tl => {
        return (
            <SidebarTask taskList={tl}/>
        )
    })

    return (
        <div className={s.sidebar_wrapper}>
            <div className={s.sidebar_title}>
                <Button type="primary">
                    Add New TasksList
                </Button>
            </div>
            <div className={s.sidebar_search}>
                <Search size='large' style={{width: '95%'}} placeholder="search task" enterButton={'Search'}/>
            </div>
            <div className={s.sidebar_filter}>
                <Badge size="small" count={11}>
                    <Button size={'small'} type="primary" style={{backgroundColor: "#52c41a"}}>Low</Button>
                </Badge>
                <Badge size="small" count={6}>
                    <Button size={'small'} type="primary" style={{backgroundColor: "#faad14"}}>Medium</Button>
                </Badge>
                <Badge size="small" count={2}>
                    <Button size={'small'} type="primary" style={{backgroundColor: "#f5222d"}}>High</Button>
                </Badge>
            </div>
            <div className={s.sidebar_filter}>
                <Badge size="small" count={19}>
                    <Button size={'small'} type="primary">All</Button>
                </Badge>
                <Badge size="small" count={18}>
                    <Button size={'small'} type="primary">Active</Button>
                </Badge>
                <Badge size="small" count={1}>
                    <Button size={'small'} type="primary">Completed</Button>
                </Badge>
            </div>
            <div className={s.sidebar_tasks_wrapper}>
                {sidebarTasksLists}
            </div>
        </div>
    );
};

