
//========== TYPES ========== //
export type PriorityTypes = 'Low' | 'Medium' | 'High'

export type InitFilterStateType = {
    priorityFilter: Array<PriorityTypes>
    isDoneFilter: boolean | null
}

type ActionsTypes = ReturnType<typeof changePriorityFilterAC>
    | ReturnType<typeof changeStatusFilterAC>
    | ReturnType<typeof resetFiltersAC>


//========== REDUCES ========== //

const initFilterState: InitFilterStateType = {
    priorityFilter: [],
    isDoneFilter: null
}

export const filterReducer = (state: InitFilterStateType = initFilterState, action: ActionsTypes): InitFilterStateType => {
    switch (action.type) {
        case CHANGE_PRIORITY_FILTER:
            return {...state, priorityFilter:
                    state.priorityFilter.includes(action.payload.newFilterValue)
                    ? state.priorityFilter.filter(f => f !== action.payload.newFilterValue)
                    : [...state.priorityFilter, action.payload.newFilterValue]
                    }
        case CHANGE_STATUS_FILTER:
            return {...state, isDoneFilter: action.payload.newFilterValue}
        case RESET_ALL_FILTERS:
            return {...state, priorityFilter: [], isDoneFilter: null}
        default: return state
    }
}

//========== ACTION CREATORS ========== //

const CHANGE_PRIORITY_FILTER = 'CHANGE_PRIORITY_FILTER'
const CHANGE_STATUS_FILTER = 'CHANGE_STATUS_FILTER'
const RESET_ALL_FILTERS = 'RESET_ALL_FILTERS'

export const changePriorityFilterAC = (newFilterValue: PriorityTypes) => {
    return {
        type: CHANGE_PRIORITY_FILTER,
        payload: {
            newFilterValue
        }
    } as const
}

export const changeStatusFilterAC = (newFilterValue: boolean | null) => {
    return {
        type: CHANGE_STATUS_FILTER,
        payload: {
            newFilterValue
        }
    } as const
}

export const resetFiltersAC = () => {
    return {
        type: RESET_ALL_FILTERS
    } as const
}