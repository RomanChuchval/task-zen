import React, {FC, memo} from 'react';
import {SuperButton} from "../../common/SuperButton";
import s from "./FilterBlock.module.css";
import {TaskListType} from "../../../redux/reducers/tasks-lists-reducer";
import {useDispatch} from "react-redux";
import {
    changePriorityFilterAC,
    changeStatusFilterAC,
    PriorityFilterType,
    resetFiltersAC
} from "../../../redux/reducers/filter-reducer";

type FilterBlockPropsType = {
    tasksLists: Array<TaskListType>
}

export const FilterBlock: FC<FilterBlockPropsType> = memo(({tasksLists}) => {
    const dispatch = useDispatch()

    const getLowPriorityTasksList = () => tasksLists.filter(el => el.priority === 'Low').length
    const lowPriorityCount =  getLowPriorityTasksList()
    const getMediumPriorityTasksList = () => tasksLists.filter(el => el.priority === 'Medium').length
    const middlePriorityCount = getMediumPriorityTasksList()
    const getHighPriorityTasksList = () => tasksLists.filter(el => el.priority === 'High').length
    const highPriorityCount = getHighPriorityTasksList()
    const getActiveTasksList = () => tasksLists.filter(el => !el.isDone).length
    const activeTasksListCount = getActiveTasksList()
    const getDoneTasksList = () => tasksLists.filter(el => el.isDone).length
    const doneTasksListCount = getDoneTasksList()
    const allTasksListCount = tasksLists.length

    const setPriorityFilters = (newFilterValue: PriorityFilterType) => {
        dispatch(changePriorityFilterAC(newFilterValue))
    }
    const setStatusFilters = (newFilterValue: boolean | null) => {
        dispatch(changeStatusFilterAC(newFilterValue))
    }

    const resetFilters = () => {
        dispatch(resetFiltersAC())
    }

    return (
        <>
            <div className={s.reset_filter}>
                <SuperButton btnSize={'small'} btnType={"text"} callback={resetFilters}>Reset Filter</SuperButton>
            </div>
            <div className={s.sidebar_filter}>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={() => setPriorityFilters('Low')}
                             badgeSize={"small"} badgeCount={lowPriorityCount} btnColor={"#52c41a"} withBadge={true}>
                    Low
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={() => setPriorityFilters('Medium')}
                             badgeSize={"small"} badgeCount={middlePriorityCount} btnColor={"#faad14"} withBadge={true}>
                    Medium
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={() => setPriorityFilters('High')}
                             badgeSize={"small"} badgeCount={highPriorityCount} btnColor={"#f5222d"} withBadge={true}>
                    High
                </SuperButton>
            </div>
            <div className={s.sidebar_filter}>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>setStatusFilters(null)}
                             badgeSize={"small"} badgeCount={allTasksListCount} withBadge={true}>
                    All
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>setStatusFilters(false)}
                             badgeSize={"small"} badgeCount={activeTasksListCount} withBadge={true} >
                    Active
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={()=>setStatusFilters(true)}
                             badgeSize={"small"} badgeCount={doneTasksListCount} withBadge={true}>
                    Completed
                </SuperButton>
            </div>
        </>
    );
});

