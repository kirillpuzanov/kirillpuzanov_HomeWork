import React, {useState} from 'react';
import styles from "./EditableSpan.module.scss";
import {MyInput} from "./MyInput";


export type EditableSpan2Type = {
    text: string
}

export function EditableSpan2(props: EditableSpan2Type) {

    const [editMode, setEditMode] = useState(false);
    const [valueInput, setValueInput] = useState('')

    const visibilityInput = () => {
        setEditMode(true)
    }
    const hideInput = () => {
        setEditMode(false)
    }
    const onChangeInput = (value: string) => {
        setValueInput(value)
    }
    const onPressEnter = () => {
        setValueInput('')
        setEditMode(false)
    }

    return (
        <div className={styles.editable}>
            {editMode ?
                <MyInput
                    autoFocus
                    type={"text"}
                    value={valueInput}
                    onChange={onChangeInput}
                    onKeyPress={onPressEnter}
                    onBlur={hideInput}
                />
                :
                <span className={styles.editable_span} onClick={visibilityInput}>{props.text}</span>
            }
        </div>
    )
}


