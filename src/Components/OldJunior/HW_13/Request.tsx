import React, {useState} from "react";
import s from './Request.module.scss'

type RequestType = {
    text: string
    onClick: (value:boolean) => void
}

export const RequestComponent = (props: RequestType) => {
    const {text, onClick} = props;

    const [checked, setChecked] = useState(false);
    const onCheckHandler = (e:React.ChangeEvent<HTMLInputElement>)=> setChecked(e.currentTarget.checked)

    const onClickHandler = () => onClick(checked);

    return (
        <div>
            <p className={s.request_title}>HW-13</p>
            <input type="checkbox" checked={checked} onChange={ onCheckHandler}/>
            <input type="submit" value={'server request'} onClick={onClickHandler}/>
            <div> {text} </div>
        </div>
    )
}