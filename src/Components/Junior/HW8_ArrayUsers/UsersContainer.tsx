import React, {useState} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../state/redax-store";
import {InitialStateUsersType, usersActions} from "../../../state/homeWorkReducer";
import {Users} from "./Users";


type mapStateToPropsType = InitialStateUsersType
type mapDispatchToProps = {
    sortNameUp: () => void
    sortNameDown: () => void
    filterByAge: () => void
}
type UsersContainerType = mapStateToPropsType & mapDispatchToProps;
export type btnType = {
    id: string
    marker: string
    isActive: boolean
    name: string
}

const UsersContainer = (props: UsersContainerType) => {
    const {users, filter, filterByAge, sortNameDown, sortNameUp} = props

    const [selectButtonName, setSelectButtonName] = useState<string>('')

    let sortNameUpCallback = () => {
        sortNameUp()
        setSelectButtonName('Sort by Name Up')
    }

    let sortNameDownCallback = () => {
        sortNameDown()
        setSelectButtonName('Sort by Name Down')
    }

    let filterByAgeCallback = () =>{
        filterByAge()
        setSelectButtonName('Sort by Age: 18+')
    }

    let usersArray = [...users]
    if (filter === '18') {
        usersArray = users.filter(user => user.age >= +filter)
    }

    return (
        <Users
            users={usersArray}
            filterByAge={filterByAgeCallback}
            sortNameDown={sortNameDownCallback}
            sortNameUp={sortNameUpCallback}
            selectButtonName={selectButtonName}

        />
    )
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.HW.users,
        filter: state.HW.filter
    }
}
export default connect<mapStateToPropsType, mapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    sortNameUp: usersActions.SortByNameUpAC,
    sortNameDown: usersActions.SortByNameDownAC,
    filterByAge: usersActions.FilterByAgeAC,
})(UsersContainer);
