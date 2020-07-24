import React, {useState} from 'react';
import {EditableSpan} from "../../common/EditableSpan";

export function Junior() {

    let [value, setValue] = useState('')
    let [editMode, setEditMode] = useState(false)


    const visibilityInput = () => setEditMode(!editMode);
    const onChangeInput = (value: string) => setValue(value);


    const saveData = () => {
        if (value === '') {
            alert('Incorrect data!')
        } else {
            setValue('')
            alert('Data sent successfully!')
            saveState('test', {x: value})
        }
    }

    const RestoreDAta = () => {
        restoreState("test", {x: 'Ранее введенные значения отсутствуют....'})
    }
    type StateType = {
        x: string
    }

    function saveState(key: string, state: StateType) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

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