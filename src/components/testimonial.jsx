import React, { useState } from "react";
import Image from "./image";
import Sides from "./testimonial_sides";
import Message from "./message";
import PersonDetail from "./person_detail";
import Axios from "axios";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

function Testimonial() {
    // const url = "https://testimonialapi.toolcarton.com/api";
    const [content, setContent] = useState("");
    let [i, updatei] = useState(11);
    function increase() {
        updatei(i + 1);
    }
    function decrease() {
        updatei(i - 1);
    }
    const Data = (i) => {
        if (i >= 10) {
            i = 0;
        }
        if (i <= -1) {
            i = 9;
        }
        Axios.get("https://testimonialapi.toolcarton.com/api").then((response) => {
            setContent(response.data[i]);
            // console.log(content);
        });
    };
    return (
        <div className="testimonial-section">
            <div className="testimonial-heading-div">
                <h1 className="testimonial-heading">Client Testimonials</h1>
            </div>
            <div className="testimonial">
                {Data(i)}
                <button
                    className="testimonial-section-2 testimonial-side"
                    onClick={decrease}
                >
                    <Sides which="left" img={content.avatar} />
                </button>
                {/* {Data(i)} */}
                <div className="testimonial-main testimonial-section-2">
                    <div className="testimonial-content">
                        <Image source={content.avatar} altNate={content.name} />
                        <FormatQuoteIcon style={{ fontSize: "400%" }} className="quote" />
                        <Message msg={content.message} audio={content.audio} />
                        <PersonDetail
                            name={content.name}
                            post={content.designation}
                            location={content.location}
                        />
                    </div>
                </div>
                {/* {Data(i + 1)} */}
                <button
                    className="testimonial-section-2 testimonial-side"
                    onClick={increase}
                >
                    <Sides which="right" img={content.avatar} />
                </button>
            </div>
        </div>
    );
}

export default Testimonial;
