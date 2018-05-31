import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './About.css';

export default class About extends React.Component {
    render() {
        let textContent = this.props.text;

        return(
        // <Row>
        //     <h1>About</h1>
        //   <Col sm="12" md={{ size: 8, offset: 2 }}>{textContent}</Col>
        // </Row>
        <div id="About" className="container containAbout">
            <div className="col">
                <div className="row text-left justify-content-center">
                    <div className="col-9 descAbout p-5 mt-5">Nashville Software School's Cohort 24 Frontend Developer &#38; UX Designer apprentices have been immersive in a full-time six-month software development bootcamp focusing on frontend development and UI/UX fundamentals. Apprentices experience daily hands on application of development fundamentals and principles through group and individual projects reflecting real world business problems.</div>
                </div>
                {/* <div className="row justify-content-center"><NavLink to='/#Meet'><button className="buttonMeet mb-5 px-5 py-3">MEET US!</button></NavLink></div> */}
            </div>
        </div>
        );
    }
}
