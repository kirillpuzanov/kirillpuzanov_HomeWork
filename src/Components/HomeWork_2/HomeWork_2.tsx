import React from "react";
import {FilterValueType} from "../../App";
import styles from './HomeWork_2.module.css';
import {MyBtn} from "../../common/MyBtn";

export type  lessonsType = {
    id: number
    n: string
    p: string
}
export type Home_3PropsType = {
    title: string
    lessons: Array<lessonsType>
    changeFilter: (value: FilterValueType) => void
    deleteLesson: (id: number) => void
}

export function HomeWork_2(props: Home_3PropsType) {
    return (
        <div className={styles.myAffairs}>
            <h2>{props.title}</h2>
            <ul>{
                props.lessons.map((l) => {
                    return <li key={l.id}>
                        <span>{l.n} -  </span>
                        <span>степень важности: </span>
                        <span>{l.p} </span>
                        <div className={styles.list_btn}>
                            <MyBtn onClick={() => props.deleteLesson(l.id)}
                                   name={'удалить'}
                                   type={'button'}
                            />
                        </div>
                    </li>
                })
            }
            </ul>
            <div className={styles.filter_btn_inner}>
                <MyBtn onClick={() => props.changeFilter('Все')}
                       name={'Все'}
                />
                <MyBtn onClick={() => props.changeFilter('Высокая')}
                       name={'Более важные'}

                />
                <MyBtn onClick={() => props.changeFilter('Средняя')}
                       name={'важные'}
                />
                <MyBtn onClick={() => props.changeFilter('Низкая')}
                       name={'Менее важные'}
                />
            </div>
        </div>
    )
}
