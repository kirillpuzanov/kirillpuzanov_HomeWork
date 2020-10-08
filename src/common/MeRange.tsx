import React, {ChangeEvent, useCallback, useState} from "react";

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
    },[])

    return <>
        <form>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChangeRange}
            />
            <input
                type="number"
                value={value}
                step={step}
                onChange={onChangeRange}
            />
        </form>
    </>
})


