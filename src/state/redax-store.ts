import {combineReducers, createStore} from "redux";
import {hwReducer} from "./homeWorkReducer";
import {PreloaderReducer} from "./HW10Reducer";



type RootReducersType = typeof reducers;
export type AppStateType = ReturnType<RootReducersType>;


let reducers = combineReducers({
    HW: hwReducer,
    HW10: PreloaderReducer,
})

export const store = createStore(reducers)

