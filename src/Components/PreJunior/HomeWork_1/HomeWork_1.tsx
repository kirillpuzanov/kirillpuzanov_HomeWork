import React from "react";
import st from './Message.module.css';

type MessagePropsType = {
    src: string
    name: string
    text: string

}
export function HomeWork_1(props: MessagePropsType) {
    let hours = new Date().getHours()
    let min = new Date().getMinutes()
    return (
        <div className={st.message_wrapper}>
            <div className={st.message_inner}>
                <div><img className={st.message_ava} src={props.src} alt="#"/></div>
                <div className={st.message_cont}>
                    <span className={st.message_name}>{props.name} </span>
                    <div className={st.message_text}>{props.text}</div>
                    <span className={st.message_date}> {min < 10 ? hours + '.' + 0 + min : hours + '.' + min}</span>
                </div>
            </div>
        </div>
    )
}