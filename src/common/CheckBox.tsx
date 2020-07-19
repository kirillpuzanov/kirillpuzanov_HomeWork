import React, {ChangeEvent} from 'react';
import styles from "./CheckBox.module.css";

export type myCheckBoxType = {
    ChangeStatus: (checked: boolean) => void
    checked: boolean
    type: 'checkbox'
}

export function MyCheckBox(props: myCheckBoxType) {

    const ChangeStatus = (e: ChangeEvent<HTMLInputElement>) => props.ChangeStatus(e.currentTarget.checked)

    return (
        <div>
            <input
                className={styles.checkbox}
                type={props.type}
                checked={props.checked}
                onChange={ChangeStatus}
            />
        </div>
    )
}









