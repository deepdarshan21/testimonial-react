import React from "react";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";

function Message(props) {
    function audio() {
        var audio = new Audio(props.audio);
        audio.play();
    }
    return (
        <div className="message">
            {props.msg}
            <RecordVoiceOverIcon fontSize="small" onClick={audio} />
        </div>
    );
}

export default Message;
