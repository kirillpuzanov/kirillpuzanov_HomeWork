import React, {ChangeEvent} from "react";
import {dataThemeType} from "../../state/HW12";
import s from "../../common/MyRange.module.scss";

type ChangeRootStyleType = {
    data: dataThemeType[]
    onChange: (title:string,checked:boolean) => void

}

export const ChangeRootStyle: React.FC<ChangeRootStyleType> = React.memo((props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value, e.target.checked)
    }

    return <div>
        <div className={s.title}>HW-12</div>
        {
            props.data.map(el => <label key={el.id}><input
                type="radio"
                checked={el.checked}
                value={el.title}
                onChange={onChangeHandler}
            />{el.title}</label> )
        }
    </div>
})


