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
    const [prevContent, setPrevContent] = useState("");
    const [nextContent, setNextContent] = useState("");
    let [i, updatei] = useState(0);
    function increase() {
        if (i === 9) updatei(0);
        else updatei(i + 1);
    }
    function decrease() {
        if (i === 0) updatei(9);
        else updatei(i - 1);
    }
    // const Data = () => {
    Axios.get("https://testimonialapi.toolcarton.com/api").then((response) => {
        setContent(response.data[i]);
        if (i === 9) setNextContent(response.data[0]);
        else setNextContent(response.data[i+1]);
        if (i === 0) setPrevContent(response.data[9]);
        else setPrevContent(response.data[i - 1]);
        // console.log(content[3].name);
    });
    // };

    return (
        <div className="testimonial-section">
            <div className="testimonial-heading-div">
                <h1 className="testimonial-heading">Client Testimonials</h1>
                {/* <button onClick={Data}>Click</button> */}
            </div>
            <div className="testimonial">
                {/* {Data(i)} */}
                <button
                    className="testimonial-section-2 testimonial-side"
                    onClick={decrease}
                >
                    <Sides which="left" img={prevContent.avatar} />
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
                    <Sides which="right" img={nextContent.avatar} />
                </button>
            </div>
        </div>
    );
}

export default Testimonial;
