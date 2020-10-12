export type dataThemeType = {
    id: number
    title: string
    checked: boolean
}
export type HW12StateType = {
    currentTheme: string
    dataTheme: dataThemeType[]
}
const initialState = {
    currentTheme: 'start',
    dataTheme: [
        {id: 1, title: 'start', checked: true},
        {id: 2, title: 'night', checked: false},
        {id: 3, title: 'light', checked: false},
    ]
}
export const changeStyleAC = (title: string, checked: boolean): changeStyleACType => {
    return ({type: 'CHANGE-THEME-STYLE', title, checked} as const)
}
type changeStyleACType = {
    type: 'CHANGE-THEME-STYLE'
    title: string
    checked: boolean
}
export const ChangeStyleReducer = (state: HW12StateType = initialState, action: changeStyleACType): HW12StateType => {
    switch (action.type) {
        case "CHANGE-THEME-STYLE": {
            return {
                ...state,
                dataTheme: [...state.dataTheme.map(el => el.title === action.title
                    ? {...el, checked: action.checked}
                    : {...el, checked: false})],
                currentTheme: action.title
            }
        }
        default:
            return state;
    }

}
