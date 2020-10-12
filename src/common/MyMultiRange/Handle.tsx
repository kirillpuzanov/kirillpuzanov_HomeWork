import React from "react";

type handleType = {
    handle: {
        id: string;
        value: number;
        percent: number;
    }
    getHandleProps: (id: string) => void
}

export function Handle(props: handleType) {
    return (
        <div
            style={{
                left: `${props.handle.percent}%`,
                position: 'absolute',
                marginLeft: -15,
                marginTop: 25,
                zIndex: 2,
                width: 30,
                height: 30,
                border: 0,
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '50%',
                backgroundColor: '#2C4870',
                color: '#333',
            }}
            {...props.getHandleProps(props.handle.id,)}
        >
            <div style={{fontFamily: 'Roboto', fontSize: 11, marginTop: -35}}>
                {props.handle.value}
            </div>
        </div>
    )
}