import React, {FC, memo} from 'react';
import {SuperButton} from "../../common/SuperButton";
import s from "./FilterBlock.module.css";
import {TaskListType} from "../../../redux/reducers/tasks-lists-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    changePriorityFilterAC,
    changeStatusFilterAC, FiltersGroupType,
    PriorityTypes,
    resetFiltersAC
} from "../../../redux/reducers/filter-reducer";
import {AppRootType} from "../../../redux/store";
import {v1} from "uuid";

type FilterBlockPropsType = {
    tasksLists: Array<TaskListType>
}

export const FilterBlock: FC<FilterBlockPropsType> = memo(({tasksLists}) => {
    const filters = useSelector<AppRootType, FiltersGroupType>(state => state.filters.tasksLists)
    const dispatch = useDispatch()

    // Counting buttons badges values //
    const getLowPriorityTasksList = ( () => tasksLists.filter(el => el.priority === 'Low').length)
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

    // Set filters values //
    const setPriorityFilters = (newFilterValue: PriorityTypes) => {
        dispatch(changePriorityFilterAC('tasksLists', newFilterValue))
    }
    const setStatusFilters = (newFilterValue: boolean | null) => {
        dispatch(changeStatusFilterAC('tasksLists', newFilterValue))
    }
    const resetFilters = () => {
        dispatch(resetFiltersAC('tasksLists'))
    }

    // Display active filters //
    const filtersValues = () => {
        let statusValue = filters.isDoneFilter === true ? 'Completed'
            : filters.isDoneFilter === false ? 'Active' : 'All'
        return [statusValue, ...filters.priorityFilter]
    }

    const displayFiltersValues = filtersValues().map(value => {
        return <span key={v1()} className={s.filter_value}>
            <span>{value} </span>
        </span>
    })

    return (
        <>
            <div className={s.reset_filter}>
                <SuperButton btnSize={'small'} btnType={"default"} callback={resetFilters}>Clear filters</SuperButton>
            </div>
            <div className={s.filters_values}>
                {displayFiltersValues}
            </div>
            <div className={s.sidebar_filter}>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={() => setPriorityFilters('Low')}
                             badgeSize={"small"} badgeCount={lowPriorityCount} btnColor={"#52c41a"} withBadge={true}>
                    Low {filters.priorityFilter.includes('Low') && '✓'}
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={() => setPriorityFilters('Medium')}
                             badgeSize={"small"} badgeCount={middlePriorityCount} btnColor={"#faad14"} withBadge={true}>
                    Medium {filters.priorityFilter.includes('Medium') && '✓'}
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={() => setPriorityFilters('High')}
                             badgeSize={"small"} badgeCount={highPriorityCount} btnColor={"#f5222d"} withBadge={true}>
                    High {filters.priorityFilter.includes('High') && '✓'}
                </SuperButton>
            </div>
            <div className={s.sidebar_filter}>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={() => setStatusFilters(null)}
                             badgeSize={"small"} badgeCount={allTasksListCount} withBadge={true}>
                    All {filters.isDoneFilter === null && '✓'}
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={() => setStatusFilters(false)}
                             badgeSize={"small"} badgeCount={activeTasksListCount} withBadge={true}>
                    Active {filters.isDoneFilter === false && '✓'}
                </SuperButton>
                <SuperButton btnSize={"small"} btnType={"primary"} callback={() => setStatusFilters(true)}
                             badgeSize={"small"} badgeCount={doneTasksListCount} withBadge={true}>
                    Completed {filters.isDoneFilter === true && '✓'}
                </SuperButton>
            </div>
        </>
    );
});

