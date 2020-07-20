import React from 'react';
import style from './UniversalComp.module.css';
import {MyInput} from "../../common/MyInput";
import {MyCheckBox} from "../../common/CheckBox";
import {MyBtn} from "../../common/MyBtn"


type UniversalCompType = {}

export function UniversalComp(props: UniversalCompType) {

    return (
        <div className={style.universalComp}>
            <div>
                <MyCheckBox
                    type={'checkbox'}
                    checked={false}
                    ChangeStatus={() => {
                    }}
                />
            </div>
            <div>
                <MyInput
                    type={'text'}
                    onChange={() => {
                    }}
                    onKeyPress={() => {
                    }}/>
            </div>
            <div>
                <MyBtn
                    name={'press'}
                    onClick={() => {
                    }}
                />
            </div>
        </div>
    )
}
