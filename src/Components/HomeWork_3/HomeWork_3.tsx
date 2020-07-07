import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {v1} from "uuid";
import s from'./HomeWork_3.module.css';


type newUserType = { id: string, name: string }
type helloUserPropsType = {}

export function HomeWork_3(props: helloUserPropsType) {

    const [text, setText] = useState<string>('')
    const [users, setUsers] = useState<Array<newUserType>>([])
    const onClickButton = () => {
        if (text !== '' && text !== null) {
            addNewUserToArr(text);
            alert(`Привет ${text}!  Ты ${users.length+1} в списке`);
            setText('')
        } else {
            alert('Введите своё имя.')
        }
    }
    const addNewUserToArr = (newName:string) => {
        let newUser:newUserType  = {id: v1(), name: newName};
        setUsers([newUser, ...users ]);
    }
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickButton();
        }
    }

    return (
        <div className={s.work3}>
            <h3>HomeWork_3</h3>
            <input value={text}
                   onChange={onChangeInput}
                   onKeyPress={onKeyPressEnter}
            />
            <button onClick={onClickButton}> Press</button>
        </div>
    )
}