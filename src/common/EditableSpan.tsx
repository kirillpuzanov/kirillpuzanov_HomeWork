import React from 'react';
import styles from "./EditableSpan.module.scss";
import {MyInput} from "./MyInput";
import {MyBtn} from "./MyBtn";


export type EditableSpanType = {
    value: string
    text: string
    onChange: (value: string) => void
    visibilityInput?: () => void
    editMode?: boolean
    pressEnter?: () => void
    saveData: () => void
    RestoreDAta: () => void

}

export function EditableSpan(props: EditableSpanType) {

    const {value, text, onChange, editMode, visibilityInput, pressEnter, saveData, RestoreDAta} = props;





    return (
        <div className={styles.editable}>
            {!editMode && <span className={styles.editable_span} onClick={visibilityInput}> {text}</span>}
            {editMode &&
            <span>
                <MyInput
                    autoFocus
                    type={"text"}
                    value={value}
                    onChange={onChange}
                    onKeyPress={pressEnter}
                />
                <MyBtn
                    name={'Сохранить'}
                    onClick={saveData}/>
                <MyBtn
                    name={'Восстановить'}
                    onClick={RestoreDAta}/>
            </span>
            }
        </div>
    )
}


