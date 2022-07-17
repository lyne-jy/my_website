import React from 'react';
import { Col, Image, Row } from "react-bootstrap";

const AboutMe = () => {
    return (
        <div className="section p-5 vh-100 text-white bg-dark" id="about">
            <Row className="row">
                <Col>
                    <h2>Hello! I’m Junyi.</h2>
                    <p>I am a 3rd year Computer Science student at University of Calgary. I am passionate about
                        programming and problem-solving. I have proficiency in JavaScript, C++ and Java. I am a
                        quick learner and a team worker that gets the job done. I can easily capitalize on low
                        hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
                </Col>
                <Col>
                    <Image roundedCircle src="https://picsum.photos/400" width="300" height="300"/>
                </Col>
            </Row>
        </div>
    );
};

export default AboutMe;