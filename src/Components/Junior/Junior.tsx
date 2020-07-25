import React, {useState} from 'react';
import {EditableSpan} from "../../common/EditableSpan";

export function Junior() {

    let [value, setValue] = useState('')
    let [editMode, setEditMode] = useState(false)

// Функция показа/скрытия инпута
    const visibilityInput = () => setEditMode(!editMode);
    // Сохранение введенного текста  инпута в стэйт (в переменную value)
    const onChangeInput = (value: string) => setValue(value);

//Функция для кнопки "Сохранить", при клике =>  проверка на пустой инпут/ восстановление пустого инпута+ сообщение об удачной отправке данных+сохранение в localStorage
    const saveData = () => {
        if (value === '') {
            alert('Incorrect data!')
        } else {
            setValue('')
            alert('Data sent successfully!')
            saveState('test', {x: value})
        }
    }
// Функция для кнопки "Восстановить" => восстанавливает последний ввод в инпут из lS / (либо выводит алерт с сообщением из дефолтного обьекта - логика описана в restoreState)
    const RestoreDAta = () => {
        restoreState("test", {x: 'Ранее введенные значения отсутствуют....'})
    }
    type StateType = {
        x: string
    }

// Функция сохранения value из  input  в lS
    function saveState(key: string, state: StateType) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

// Функция восстановления value  из lS/ проверка на наличие в lS данных
    function restoreState(key: string, defaultState: StateType) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) {
            defaultState = JSON.parse(stateAsString)
            setValue(defaultState.x)
        } else {
            alert(defaultState.x)
            return defaultState;
        }
    }

// Функция для инпута
    const pressEnter = () => saveData();

    return (
        <div>
            <EditableSpan
                value={value}
                text='Press for open input...'
                onChange={onChangeInput}
                editMode={editMode}
                visibilityInput={visibilityInput}
                pressEnter={pressEnter}
                saveData={saveData}
                RestoreDAta={RestoreDAta}
            />
        </div>
    )
}