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
    let [i, updatei] = useState(0);
    function increase() {
        // updatei(i + 1);
        console.log("clicked");
    }
    function decrease() {
        updatei(i - 11);
    }
    const Data = () => {
        if (i === 10) {
            i = 0;
        }
        if (i === -1) {
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
                {Data()}
                <Sides which="left" img={content.avatar} onclick={decrease} />
                {/* {Data(i)} */}
                <div className="testimonial-main testimonial-section-2">
                    <div className="testimonial-content">
                        <Image source={content.avatar} altNate={content.name} />
                        <FormatQuoteIcon style={{ fontSize: "400%" }} className="quote" />
                        <Message msg={content.message} />
                        <PersonDetail name={content.name} post={content.designation} />
                    </div>
                </div>
                {/* {Data(i + 1)} */}
                <Sides which="right" img={content.avatar} onclick={increase} />
            </div>
        </div>
    );
}

export default Testimonial;
