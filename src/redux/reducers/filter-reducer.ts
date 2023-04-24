//========== TYPES ========== //
export type PriorityTypes = 'Low' | 'Medium' | 'High'

export type InitFilterStateType = {
    tasksLists: FiltersGroupType
    tasks: FiltersGroupType
}
export type FiltersGroupType = {
    priorityFilter: Array<PriorityTypes>
    isDoneFilter: boolean | null
}
export type FilteringEntityType = 'tasksLists' | 'tasks'

type ActionsTypes = ReturnType<typeof changePriorityFilterAC>
    | ReturnType<typeof changeStatusFilterAC>
    | ReturnType<typeof resetFiltersAC>


//========== REDUCES ========== //

const initFilterState: InitFilterStateType = {
    tasksLists: {
        priorityFilter: [],
        isDoneFilter: null
    },
    tasks: {
        priorityFilter: [],
        isDoneFilter: null
    }
}

export const filterReducer = (state: InitFilterStateType = initFilterState, action: ActionsTypes): InitFilterStateType => {
    switch (action.type) {
        case CHANGE_PRIORITY_FILTER:
            return {
                ...state, [action.payload.filteringEntity]:
                    {...state[action.payload.filteringEntity], priorityFilter:
                    state[action.payload.filteringEntity].priorityFilter.includes(action.payload.newFilterValue)
                        ? state[action.payload.filteringEntity].priorityFilter
                            .filter(f => f !== action.payload.newFilterValue)
                        : [...state[action.payload.filteringEntity].priorityFilter, action.payload.newFilterValue]
            }}
        case CHANGE_STATUS_FILTER:
            return {...state, [action.payload.filteringEntity]:
                    {...state[action.payload.filteringEntity],isDoneFilter: action.payload.newFilterValue}}
        case RESET_ALL_FILTERS:
            return {...state, [action.payload.filteringEntity]:
                    {...state[action.payload.filteringEntity], priorityFilter: [], isDoneFilter: null}}
        default:
            return state
    }
}

//========== ACTION CREATORS ========== //

const CHANGE_PRIORITY_FILTER = 'CHANGE_PRIORITY_FILTER'
const CHANGE_STATUS_FILTER = 'CHANGE_STATUS_FILTER'
const RESET_ALL_FILTERS = 'RESET_ALL_FILTERS'

export const changePriorityFilterAC = (filteringEntity: FilteringEntityType, newFilterValue: PriorityTypes) => {
    return {
        type: CHANGE_PRIORITY_FILTER,
        payload: {
            newFilterValue,
            filteringEntity
        }
    } as const
}

export const changeStatusFilterAC = (filteringEntity: FilteringEntityType, newFilterValue: boolean | null) => {
    return {
        type: CHANGE_STATUS_FILTER,
        payload: {
            newFilterValue,
            filteringEntity
        }
    } as const
}

export const resetFiltersAC = (filteringEntity: FilteringEntityType) => {
    return {
        type: RESET_ALL_FILTERS,
        payload: {filteringEntity}
    } as const
}