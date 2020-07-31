import React from 'react';
import {generalObjType} from "../Components/Junior/Junior";


type MyRadioType = {
    generalData: generalObjType[]
    value: string
    onChange: (value: string) => void
    name: string
}

export function MyRadio(props: MyRadioType) {


    return (
        <div>
            <b>Выберете интересующий вас пункт: </b>
            {
                props.generalData.slice(1).map(t => {
                        return <p><input type='radio' key={t.id} name={props.name} value={t.value}/> {t.value}</p>
                })
            }
        </div>
    )
}


