import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Sides(props) {
    let image = { backgroundImage: "url(" + props.img + ")" };
    function arrow(side) {
        if (side === "left") {
            return <ArrowBackIcon className="arrow" fontSize="large" />;
        } else {
            return <ArrowForwardIcon className="arrow" fontSize="large" />;
        }
    }
    return (
        <div
            className={
                "testimonial-section-2 testimonial-side testimonial-" + props.which
            }
            style={image}
        >
            {arrow(props.which)}
        </div>
    );
}

export default Sides;
