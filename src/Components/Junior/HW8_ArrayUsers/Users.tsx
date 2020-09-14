import React from 'react';
import {UserType} from "../../../state/homeWorkReducer";
import styles from './Users.module.css';
import {MyBtn} from "../../../common/MyBtn";


type UsersType = {
    users: Array<UserType>
    sortNameUp: () => void
    sortNameDown: () => void
    filterByAge: () => void
    selectButtonName?: string

}

export const Users = (props: UsersType) => {

    return (
        <div>
            <div>
                {
                    props.users.map(el => <ul className={styles.users_list} key={el.id}>
                        <li> {`${el.name} ${el.sername} возраст - ${el.age}`} </li>
                    </ul>)
                }
            </div>
            <div>
                <MyBtn
                    onClick={props.sortNameUp}
                    name='Sort by Name Up'
                    red={'Sort by Name Up' === props.selectButtonName}
                />
                <MyBtn
                    onClick={props.sortNameDown}
                    name='Sort by Name Down'
                    red={'Sort by Name Down' === props.selectButtonName}
                />
                <MyBtn
                    onClick={props.filterByAge}
                    name='Sort by Age: 18+'
                    red={'Sort by Age: 18+' === props.selectButtonName}
                />
            </div>
        </div>
    )
}