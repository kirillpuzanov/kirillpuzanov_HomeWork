import React, {MouseEvent} from 'react';
import styles from "./MyBtn.module.css";

export type myBtnType = {
    name: string
    type?: string
    red?: boolean
    disabled?: boolean
    onClick: () => void
    className?: string

}

export function MyBtn(props: myBtnType) {

    return (
        <div>
            <button
                className={props.red ? `${styles.redBtn} ${styles.btn}` : styles.btn}
                onClick={props.onClick}
                disabled={props.disabled}
            > {props.name}
            </button>
        </div>
    )
}




