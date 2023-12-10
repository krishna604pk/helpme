import React from "react";
import Me from './images/Me.png';

function Introduction()
{
    return (
        <div id="in" className="container introduction">
            <div className="introstuff">
                <div className="introtext">
                    <p style={{ fontSize: "2vw", fontFamily: '"Monaco"' }}>Hi,</p>
                    <p className="redbar" />
                    <p style={{ fontSize: "4vw" }}>I'm Krishna Prabu</p>
                    <p style={{ fontSize: "1.3vw" }}>A game designer and web developer.</p>
                    <p style={{ fontSize: "2vw" }}>I am an undergraduate student of <strong>IIT Kharagpur</strong>.</p>
                    <p style={{ fontSize: "2vw" }}>In the department of <b>Computer Science and Engineering.</b></p>
                    <p style={{ fontSize: "2vw" }}>Enrolled in its <b>Dual Degree Course</b>.</p>
                    <p className="redbar" />
                    <p style={{ fontSize: "1.5vw" }}>I am an Associate Member of Student Welfare Group.</p>
                    <p style={{ fontSize: "1.5vw" }}>And a Junior Coordinator of NSSC</p>
                </div>
                <img className="mypic" alt="Krishna Picture" src={Me.png} />
            </div>
        </div>
    );
}

export default Introduction;