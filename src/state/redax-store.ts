import {combineReducers, createStore} from "redux";
import {hwReducer} from "./homeWorkReducer";



type RootReducersType = typeof reducers;
export type AppStateType = ReturnType<RootReducersType>;


let reducers = combineReducers({
    HW: hwReducer,
})

export const store = createStore(reducers)

