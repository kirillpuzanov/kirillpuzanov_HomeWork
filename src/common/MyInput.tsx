import React, {ChangeEvent, FocusEvent, KeyboardEvent} from 'react';
import styles from "./MyInput.module.css";


export type myInputType = {
    type: 'text'
    value: string
    onChange: (value: string) => void
    error?: 'red'
    onKeyPress?: () => void
    placeholder?: string
    closeInput?: (value: string) => void
    autoFocus?: boolean
    onBlur?: () => void
}

export function MyInput(props: myInputType) {

    const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (props.onKeyPress && e.charCode === 13) {
            props.onKeyPress()
        }
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => props.onChange(e.currentTarget.value);


    return (
        <div>
            <input
                onBlur={props.onBlur}
                type={props.type}
                value={props.value}
                onChange={handleChange}
                onKeyPress={onPressEnter}
                className={props.error ? `${styles.inputBase}${styles.red}` : styles.inputBase}
                placeholder={props.placeholder}
            />
        </div>
    )
}






