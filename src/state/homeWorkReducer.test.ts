import {
    hwReducer,
    initialStateUsers, usersActions,

} from "./homeWorkReducer";

test('correct work hwReducer - sort by name up', () => {

    const endState = hwReducer(initialStateUsers, usersActions.SortByNameUpAC())
    expect(endState.users[0].name).toBe('Alex');
    expect(endState.users[5].name).toBe('Victor');
});

test('correct work hwReducer - sort by name down', () => {

    const endState = hwReducer(initialStateUsers, usersActions.SortByNameDownAC())
    expect(endState.users[5].name).toBe('Alex');
    expect(endState.users[0].name).toBe('Victor');
})

test('correct work hwReducer - sort by age 18+', () => {

    const endState = hwReducer(initialStateUsers, usersActions.FilterByAgeAC())
    expect(endState.users.length).toBe(4);

})
