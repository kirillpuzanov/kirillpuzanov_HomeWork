import React from 'react';
import {generalObjType} from "../Components/Junior/Junior";


type MyRadioType = {
    arrData: generalObjType[]
    value: string
    onChange: (value: string ) => void
    name?: string
}

export function MyRadio(props: MyRadioType) {


    return (
        <div>
            <b>Выберете интересующий вас пункт: </b>
            {
                props.arrData.slice(1).map(t => <p key={t.id}><input type='radio'  name={props.name} value={t.value}/> {t.value}</p>)
            }
        </div>
    )
}


