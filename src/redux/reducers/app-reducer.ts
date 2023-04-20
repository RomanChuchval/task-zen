
//CONSTANTS
const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

// REDUCER
const appInitialState: AppInitialStateType = {
    isDrawerOpen: false,
    formVariant: null
}

export const appReducer = (state: AppInitialStateType = appInitialState, action: AppActionsTypes): AppInitialStateType => {
    switch (action.type) {
        case TOGGLE_DRAWER:
        return {...state, isDrawerOpen: action.payload.isOpen, formVariant: action.payload.variant}
        default:
            return state
    }
}

//ACTION_CREATORS
export const toggleDrawerAC = (isOpen: boolean, variant: DrawerVariantType) => (
    {type: TOGGLE_DRAWER, payload: {isOpen, variant}} as const
)

// TYPES
export type AppInitialStateType = {
    isDrawerOpen: boolean
    formVariant: DrawerVariantType
}
export type DrawerVariantType = null | 'addTask' | 'addTasksList'
export type AppActionsTypes = ReturnType<typeof toggleDrawerAC>