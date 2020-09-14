import React, {useState} from 'react';
import {EditableSpan} from "../../common/EditableSpan";
import {v1} from "uuid";
import {MySelect} from "../../common/MySelect";
import {MyRadio} from "../../common/MyRadio";
import style from './Junior.module.css';
import UsersContainer from "./HW8_ArrayUsers/UsersContainer";


//тип для обьектов, внутри масива selectData
export type generalObjType = {
    id: string
    value: string
}


export function Junior() {
////////////////////////////////////////////////////////////////
    let [value, setValue] = useState('')
    let [editMode, setEditMode] = useState(false)

// Функция показа/скрытия инпута
    const visibilityInput = () => setEditMode(true);
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

// Функция сохранения value из  inputs  в lS
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


    ///            MySelect + Radio ////////////

    // универсальный массив для MySelect + Radio
    const generalData: generalObjType[] = [
        {id: v1(), value: 'Выберите интересующий пункт: '},
        {id: v1(), value: 'Персональные компъютеры'},
        {id: v1(), value: 'Ноутбуки'},
        {id: v1(), value: 'Смартфоны'},
        {id: v1(), value: 'Комплектующие для ПК '},
        {id: v1(), value: 'Комплектующие для ноутбуков'},
        {id: v1(), value: 'Аксессуары'}
    ]

    const [activeSelect, setActiveSelect] = useState('')
    const [activeRadio, setActiveRadio] = useState('')


    const ChangeSelect = (value: string) => {
        generalData.find(t => {
            if (t.value === value) setActiveSelect(t.value)
        })
    }

    const ChangeRadio = (value: string) => {
        generalData.find(t => {
            if (t.value === value) setActiveRadio(t.value)
        })
    }
/////////////////////////////////////////////////////////
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
            <div className={style.junior_inner}>
                <MySelect
                value={activeSelect}
                onChange={ChangeSelect}
                generalData={generalData}
            />
                <MyRadio
                    generalData={generalData}
                    name='products'
                    onChange={ChangeRadio}
                    value={activeRadio}
                />
            </div>
            <UsersContainer/>
        </div>
    )
}