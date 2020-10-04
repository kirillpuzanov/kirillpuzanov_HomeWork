

export type preloadStateType = typeof initialState;
type preloaderACType = {
    type: 'SET_LOADING'
    loading: boolean
}

const initialState = {
    loading: false
}

export const preloaderAC = (loading: boolean): preloaderACType => {
    return ({type: 'SET_LOADING', loading} as const)
}

export const PreloaderReducer = (state: preloadStateType = initialState, action: preloaderACType) => {
    switch (action.type) {
        case "SET_LOADING":{
            return {...state,loading:action.loading}
        }
        default:
            return state;
    }
}