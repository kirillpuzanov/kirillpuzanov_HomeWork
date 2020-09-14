import {v1} from "uuid";


export type UserType = {
    id: string
    name: string
    sername: string
    age: number
}

export let initialStateUsers = {
    users: [
        {id: v1(), name: 'Julia', sername: 'Ivanova', age: 13},
        {id: v1(), name: 'Kirill', sername: 'Ivanov', age: 28},
        {id: v1(), name: 'Alex', sername: 'Ivanov', age: 18},
        {id: v1(), name: 'Nikita', sername: 'Ivanov', age: 15},
        {id: v1(), name: 'Victor', sername: 'Ivanov', age: 18},
        {id: v1(), name: 'Anna', sername: 'Ivanova', age: 21}
    ],
    filter: null
}

export type InitialStateUsersType = {
    users: Array<UserType>
    filter: string | null
}

export type ActionsType = SortByNameUpActionType | SortByNameDownActionType | FilterByAgeActionType;

export type SortByNameUpActionType = {
    type: "SORT-BY-NAME-UP"
    payload: string | null
}
export type SortByNameDownActionType = {
    type: "SORT-BY-NAME-DOWN"
    payload: string | null
}
export type FilterByAgeActionType = {
    type: "CHECK"
    payload: string | null
}

export const usersActions = {
    SortByNameUpAC: (): SortByNameUpActionType => ({type: "SORT-BY-NAME-UP", payload: 'up'}) as const,
    SortByNameDownAC: (): SortByNameDownActionType => ({type: "SORT-BY-NAME-DOWN", payload: 'down'}) as const,
    FilterByAgeAC: (): FilterByAgeActionType => ({type: "CHECK", payload: '18'}) as const,
}

const sortArr = (arr: Array<UserType>): Array<UserType> => {
    arr = [...arr].sort(function (a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    })
    return arr
}

export const hwReducer = (state: InitialStateUsersType = initialStateUsers, action: ActionsType): InitialStateUsersType => {

    switch (action.type) {
        case "SORT-BY-NAME-UP": {
            return {...state, users: sortArr(state.users),filter: action.payload}
        }
        case "SORT-BY-NAME-DOWN": {
            return {...state, users: sortArr(state.users).reverse(),filter: action.payload}
        }
        case "CHECK": {
            return {
                ...state,
                filter: action.payload
            }
        }
        default:
            return state
    }
}

