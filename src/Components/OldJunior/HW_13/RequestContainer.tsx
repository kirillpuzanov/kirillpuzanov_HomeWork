import React, {useState} from "react";
import {RequestComponent} from "./Request";
import {HW13_request} from "../../../api/Api";


export const RequestContainer = () => {
    const [responseText, setText] = useState('');

    function onClickRequest(value: boolean) {

        HW13_request(value)
            .then((response) => setText(JSON.stringify(response.data.info)))
            .catch((err) => setText(JSON.stringify(err.message)))
    }

    return (
        <div>
            <RequestComponent
                text={responseText}
                onClick={onClickRequest}
            />
        </div>
    )
}


