import React, {ChangeEvent, useCallback} from "react";
import s from './MyRange.module.scss';

type RangeType = {
    onChange: (value: number) => void
    min: number
    max: number
    step: number
    value: number
}

export const MyRange = React.memo((props: RangeType) => {

    const {min, max, step, value} = props;
    const onChangeRange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        return props.onChange(Number(e.target.value))
    }, [])

    return <>
        <div className={s.title}>HW-11</div>
        <form className={s.myRange}>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChangeRange}
            />
            <div>{value}</div>
        </form>
    </>
})


