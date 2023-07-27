import React from 'react';
import s from 'common/components/main/Main.module.css'
import {Task} from "common/components/main/task/Task";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "redux/store";
import {TasksStateType} from "redux/reducers/tasks-reducer";
import {AppstoreAddOutlined, SortAscendingOutlined, FilterOutlined} from '@ant-design/icons';
import {SuperButton} from "common/components/CustomButton/SuperButton";
import {MembersAvatars} from "common/components/main/members-avatars/MembersAvatars";
import {Statistics} from "common/components/main/statistics/Statistics";
import {useParams} from "react-router-dom";
import {Empty} from 'antd';
import {AddEntityDrawer} from "common/components/main/task/addEntityDrawer/AddEntityDrawer";
import {toggleDrawerAC} from "redux/reducers/app-reducer";
import {getTasksListTitle} from "utils/selectors/tasksListTitleSelector";
import {filterData} from "utils/getFilteredData";
import {PriorityTypes} from "redux/reducers/filter-reducer";

export const Main = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const tasksListIdParams = id ? id : ''
    const isDrawerOpen = useSelector<AppRootType, boolean>(state => state.app.isDrawerOpen)
    const tasksArray = useSelector<AppRootType, Array<TasksStateType>>(state => state.tasks[tasksListIdParams])
    const priorityFilters = useSelector<AppRootType, PriorityTypes[]>(state => state.filters.tasks.priorityFilter)
    const statusFilter = useSelector<AppRootType, boolean | null>(state => state.filters.tasks.isDoneFilter)
    const taskListTitle = useSelector<AppRootType, string | undefined>((state: AppRootType) =>
        getTasksListTitle(state, tasksListIdParams))
    const filteredTasks = filterData<TasksStateType>(tasksArray, priorityFilters, statusFilter)

    const tasks = tasksListIdParams && tasksArray.length
        ? filteredTasks.map(task => {
            return (
                <Task key={task.id} taskData={task} tasksListId={tasksListIdParams}/>
            )
        })
        : null

    const onOpenDrawerHandler = () => {
        dispatch(toggleDrawerAC(true, 'addTask'))
    }

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
                    <SuperButton btnType={"primary"} disabled={!tasksListIdParams} callback={onOpenDrawerHandler}>
                        <AppstoreAddOutlined/>Add New Task</SuperButton>
                    <SuperButton btnType={"primary"} disabled={!tasksListIdParams} callback={() => {
                    }}><FilterOutlined/>Filter</SuperButton>
                    <SuperButton btnType={"primary"} disabled={!tasksListIdParams} callback={() => {
                    }}><SortAscendingOutlined/>Sort</SuperButton>
                </div>
            </div>
            <div className={s.main_tasks_wrapper}>
                <div className={`${tasks ? s.main_tasks : s.main_empty}`}>
                    <div className={s.tasks_list}>
                        {tasks ? tasks : <Empty description={'Tasks List is Empty!'}/>}
                    </div>
                </div>
                {tasks && <Statistics tasks={filteredTasks}/>}
                <AddEntityDrawer isOpen={isDrawerOpen} tasksListId={tasksListIdParams}/>
            </div>
        </div>
    );
};