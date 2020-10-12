import {combineReducers, createStore} from "redux";
import {hwReducer} from "./homeWorkReducer";
import {PreloaderReducer} from "./HW10Reducer";
import {ChangeStyleReducer} from "./HW12";



type RootReducersType = typeof reducers;
export type AppStateType = ReturnType<RootReducersType>;


let reducers = combineReducers({
    HW: hwReducer,
    HW10: PreloaderReducer,
    HW12:ChangeStyleReducer,
})

export const store = createStore(reducers)

// @ts-ignore
window.store = store
