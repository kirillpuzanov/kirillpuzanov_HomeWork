import React, {ChangeEvent} from 'react';
import {generalObjType} from "../Components/Junior/Junior";
import style from './MySelect.module.scss';

type MySelectType = {
    value:string
    onChange: (value: string) => void
    generalData: generalObjType[]
}


export function MySelect(props: MySelectType) {

    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.currentTarget.value)
    }
    return (
        <select
            value={props.value}
            onChange={onChangeSelectHandler}
            className={style.MySelect}
        >
            {
                props.generalData.map(d => <option key={d.id}> {d.value}</option>)
            }
        </select>
    )
}