import React from "react";


type dateType = {
    date: Date
    showDate: boolean
    runTime: () => void
    stopTime: () => void
    mouseOver: () => void
    mouseOut: () => void
}

export const DateComponent = (props: dateType) => {
    const {date, runTime, stopTime, showDate, mouseOver, mouseOut} = props;
    let dateShow = date.toLocaleDateString();
    let timeShow = date.toTimeString().slice(0, 8);
    return (
        <div>
            <div style={{
                fontSize: '40px',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: '50px',
                color: '#869ddd'
            }}>HW - 9
            </div>
            <div
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                style={{fontSize: '40px', fontWeight: 'bold', margin: '0 auto', width: ' fit-content'}}>{timeShow}
            </div>
            {
                showDate && <div style={{width: ' fit-content', margin: '0 auto'}}>
                   Не очень красивая всплывашка.. {dateShow}
                </div>
            }
            <div style={{display: 'flex', justifyContent: 'space-evenly', padding: '50px 0'}}>
                <button onClick={runTime}>Run</button>
                <button onClick={stopTime}>Stop</button>
            </div>
        </div>
    )
}


