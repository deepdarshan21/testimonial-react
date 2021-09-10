import React from "react";

function image(props) {
    return (
        <div className="avatar-image">
            <img src={props.source} className="testimonial-image" alt={props.altName} />
        </div>
    );
}
export default image;