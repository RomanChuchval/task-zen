

//CONSTANTS
const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

// REDUCER
const appInitialState: AppInitialStateType = {
    isDrawerOpen: false
}

export const appReducer = (state: AppInitialStateType = appInitialState, action: AppActionsTypes): AppInitialStateType => {
    switch (action.type) {
        case TOGGLE_DRAWER:
        return {...state, isDrawerOpen: action.payload.isOpen}
        default:
            return state
    }
}


//ACTION_CREATORS
export const toggleDrawerAC = (isOpen: boolean) => (
    {type: TOGGLE_DRAWER, payload: {isOpen}}
)

// TYPES
export type AppInitialStateType = {
    isDrawerOpen: boolean
}
export type AppActionsTypes = ReturnType<typeof toggleDrawerAC>