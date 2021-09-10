import React from "react";

function PersonDetail(props) {
    return (
        <div className="person-detail">
            <div className="name">
                <h3>{props.name}</h3>
            </div>
            <div className="designation">
                <p>{props.post}</p>
            </div>
        </div>
    );
}

export default PersonDetail;
