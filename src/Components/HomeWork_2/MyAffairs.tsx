import React from "react";
import {FilterValueType} from "../../App";
import st from './MyAffairs.module.css';

export type  lessonsType = {
    id: number
    n: string
    p: string
}
export type MyAffairPropsType = {
    title: string
    lessons: Array<lessonsType>
    changeFilter: (value: FilterValueType) => void
    deleteLesson: (id: number) => void

}

export function MyAffair(props: MyAffairPropsType) {
    return (
        <div className={st.myAffairs}>
            <h2>{props.title}</h2>
            <ul>{
                props.lessons.map((l) => {
                    return <li key={l.id}>
                        <span>{l.n} -  </span>
                        <span>степень важности: </span>
                        <span>{l.p} </span>
                        <div className={st.list_btn}>
                            <button onClick={() => {
                                props.deleteLesson(l.id)
                            }}>delete
                            </button>
                        </div>
                    </li>
                })
            }
            </ul>
            <div className={st.filter_btn_inner}>
                <button className={st.filter_btn} onClick={() => {
                    props.changeFilter('Всё')
                }}> Показать всё
                </button>
                <button className={st.filter_btn} onClick={() => {
                    props.changeFilter('Высокая')
                }}> Более важные
                </button>
                <button className={st.filter_btn} onClick={() => {
                    props.changeFilter('Средняя')
                }}> важные
                </button>
                <button className={st.filter_btn} onClick={() => {
                    props.changeFilter('Низкая')
                }}>Менее важные
                </button>
            </div>
        </div>
    )
}
