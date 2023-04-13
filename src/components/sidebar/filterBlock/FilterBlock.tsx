import React, {FC, memo, useMemo} from 'react';
import {SuperButton} from "../../common/SuperButton";
import s from "./FilterBlock.module.css";
import {TaskListType} from "../../../redux/reducers/tasks-lists-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    changePriorityFilterAC,
    changeStatusFilterAC, InitFilterStateType,
    PriorityFilterType,
    resetFiltersAC
} from "../../../redux/reducers/filter-reducer";
import {AppRootType} from "../../../redux/store";
import {v1} from "uuid";

type FilterBlockPropsType = {
    tasksLists: Array<TaskListType>
}

export const FilterBlock: FC<FilterBlockPropsType> = memo(({tasksLists}) => {
    const filters = useSelector<AppRootType, InitFilterStateType>(state => state.filters)
    const dispatch = useDispatch()


    // Counting buttons badges values //
    const getLowPriorityTasksList = useMemo(() => () => tasksLists.filter(el => el.priority === 'Low').length, [tasksLists])
    const lowPriorityCount = getLowPriorityTasksList()
    const getMediumPriorityTasksList = () => tasksLists.filter(el => el.priority === 'Medium').length
    const middlePriorityCount = getMediumPriorityTasksList()
    const getHighPriorityTasksList = () => tasksLists.filter(el => el.priority === 'High').length
    const highPriorityCount = getHighPriorityTasksList()
    const getActiveTasksList = () => tasksLists.filter(el => !el.isDone).length
    const activeTasksListCount = getActiveTasksList()
    const getDoneTasksList = () => tasksLists.filter(el => el.isDone).length
    const doneTasksListCount = getDoneTasksList()
    const allTasksListCount = tasksLists.length
    // Counting buttons badges values //

    // Set filters values //
    const setPriorityFilters = (newFilterValue: PriorityFilterType) => {
        dispatch(changePriorityFilterAC(newFilterValue))
    }
    const setStatusFilters = (newFilterValue: boolean | null) => {
        dispatch(changeStatusFilterAC(newFilterValue))
    }
    const resetFilters = () => {
        dispatch(resetFiltersAC())
    }
    // Set filters values //

    // Display active filters //
    const filtersValues = () => {
        let statusValue = filters.statusFilter === true ? 'Completed'
            : filters.statusFilter === false ? 'Active' : 'All'
        return [statusValue, ...filters.priorityFilter]
    }
    const displayFiltersValues = filtersValues().map(value => {
        const removeFilter = () => {

        }

        return <span key={v1()} className={s.filter_value}>
            <span>{value}</span>
            <SuperButton btnType={"default"} btnSize={"small"} shape={"circle"}>x</SuperButton>
        </span>
    })
    // Display active filters //

    return (
        <>
            <div className={s.reset_filter}>
                <SuperButton btnSize={'small'} btnType={"default"} callback={resetFilters}>Reset</SuperButton>
            </div>
            <div className={s.filters_values}>
                {displayFiltersValues}
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
                <SuperButton btnSize={"small"} btnType={"primary"} callback={() => setStatusFilters(null)}
                             badgeSize={"small"} badgeCount={allTasksListCount} withBadge={true}>
                    All
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={() => setStatusFilters(false)}
                             badgeSize={"small"} badgeCount={activeTasksListCount} withBadge={true}>
                    Active
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={() => setStatusFilters(true)}
                             badgeSize={"small"} badgeCount={doneTasksListCount} withBadge={true}>
                    Completed
                </SuperButton>
            </div>
        </>
    );
});

