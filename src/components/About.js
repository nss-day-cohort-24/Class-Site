import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './About.css';

export default class About extends React.Component {
    render() {
        let textContent = this.props.text;

        return(
<<<<<<< HEAD
        // <Row>
        //     <h1>About</h1>
        //   <Col sm="12" md={{ size: 8, offset: 2 }}>{textContent}</Col>
        // </Row>
        <div id="About" className="container containAbout my-5 py-5">
            <div className="col">
                <div className="row text-left justify-content-center">
                    <div className="col-11 descAbout p-5 mt-5"><p>Hello!</p><p> We are Cohort 24 from the Nashville Software School.  Our Front-End Web Design and Development Bootcamp consisted of a six month full-time program where we were trained to work across the entire spectrum of front-end design and development.  We gained experience in user experience and user interface design, then implemented those designs into working code in the browser (front-end development).  </p><p> We learned industry practices for designing user-centric applications.  During our time at NSS we were introduced to the entire design process including identifying and understanding stakeholder problems, defining personas and journeys, design research & thinking, prototyping and communicating our solutions through design.  </p><p>Along with the design process we learned front-end development, giving us the ability to bring our designs to life.  We learned how to structure webpages using semantic markup in HTML5 and then style those pages using CSS3.  We used JavaScript to extend your static HTML & CSS and create dynamic user experiences.  Lastly, were able to write efficient code by learning the framework React.js.  </p><p> As designers and developers we are able to empathize and respect both processes.  We understand how component based styling simplifies and expedites the development process, and how responsive design enhances the user experience.  We gained daily, hands-on experience applying the fundamental principles of development through group and individual projects reflecting real world business problems.  As graduates of Nashville Software School, we have gained the user experience and front-end development skills necessary to build high quality web applications. We’ve completed our transformation into REAL LIVE UNICORNS!  </p><p> tl;dr - We know code AND design! </p></div>
                </div>
                {/* <div className="row justify-content-center"><NavLink to='/#Meet'><button className="buttonMeet mb-5 px-5 py-3">MEET US!</button></NavLink></div> */}
            </div>
        </div>
=======
          <section className="text-left justify-content-center section__about">
              <p className="col descAbout p-5 mt-5">Nashville Software School's Cohort 24 Front-End Developer &#38; UX Designer apprentices have been in a full-time six-month immersive software development bootcamp focusing on Front-End development and UI/UX fundamentals. Apprentices experience daily hands on application of development fundamentals and principles through group and individual projects reflecting real world business problems.</p>
          </section>
>>>>>>> master
        );
    }
}
