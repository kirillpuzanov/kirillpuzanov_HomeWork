import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from "./MyInput.module.css";


export type myInputType = {
    type: string
    value?: string
    onChange: (value: string) => void
    error?: 'red'
    onKeyPress: () => void
    placeholder?: string
}

export function MyInput(props: myInputType) {

    const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.onKeyPress()
        }
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => props.onChange(e.currentTarget.value);

    return (
        <div>
            <input
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






