import React from "react";
import st from './Message.module.css';

type MessagePropsType = {
    src: string
    name: string
    text: string

}


export function Message(props: MessagePropsType) {
    return (
        <div className={st.message_wrapper}>
            <div className={st.message_inner}>
                <div><img className={st.message_ava} src={props.src} alt="#"/></div>
                <div className={st.message_cont}>
                    <span className={st.message_name}>{props.name} </span>
                    <div className={st.message_text}>{props.text}</div>
                    <span className={st.message_date}> {new Date().getHours() + '.' + new Date().getMinutes()}</span>
                </div>
            </div>
        </div>
    )
}