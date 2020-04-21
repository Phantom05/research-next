import React from "react";
import "./_About.scss";
import ScrollButton from "../ScrollButton"


const About = () => {
    return (
        <div className = "About">
            <div className = "About-header">
                <h1> About <span className = "title">SE.LOG</span> </h1>
            </div>
            <div className = "About-content">
                <div className = "About-content-main">
                    <br />
                    &nbsp; &nbsp; SE Log 란, SE Lab 구성원들이 만들어가는 개발 기술 정보 공유 Blog 입니다.

                </div>
            </div>
            <ScrollButton />
        </div>
    );
}

export default About;