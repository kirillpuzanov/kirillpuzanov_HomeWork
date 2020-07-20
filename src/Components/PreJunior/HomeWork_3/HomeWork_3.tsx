import React, {ChangeEvent, KeyboardEvent, MouseEvent, useState} from "react";
import {v1} from "uuid";
import s from './HomeWork_3.module.css';
import {MyInput} from "../../../common/MyInput";
import {MyBtn} from "../../../common/MyBtn";



type newUserType = { id: string, name: string }
type helloUserPropsType = {}

export function HomeWork_3(props: helloUserPropsType) {

    const [text, setText] = useState<string>('')
    const [users, setUsers] = useState<Array<newUserType>>([])
    const onClickButton = () => {
        if (text !== '') {
            addNewUserToArr(text);
            alert(`Привет ${text}!  Ты ${users.length + 1} в списке`);
            setText('')
        } else {
            alert('Введите своё имя.')
        }
    }
    const addNewUserToArr = (newName: string) => {
        let newUser: newUserType = {id: v1(), name: newName};
        setUsers([newUser, ...users]);
    }
    const onChangeInput = (value: string) => {
        setText(value);
    }
    const onPressEnter = () => {
        onClickButton();
    }

    return (
        <div className={s.work3}>
            <h3>HomeWork_3</h3>
            <MyInput value={text}
                     onChange={onChangeInput}
                     onKeyPress={onPressEnter}
                     type={'text'}
                     placeholder={'Поле ввода'}

            />
            <MyBtn onClick={onClickButton}
                   name={'press'}
                   disabled={false}
                   type={'button'}
            />
            <div> {users.length} </div>
        </div>
    )
}