import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './About.css';

export default class About extends React.Component {
    render() {
        let textContent = this.props.text;

        return(
          <section className="text-left justify-content-center section__about">
              <p className="col descAbout p-5 mt-5">Nashville Software School's Cohort 24 Front-End Developer &#38; UX Designer apprentices have been in a full-time six-month immersive software development bootcamp focusing on Front-End development and UI/UX fundamentals. Apprentices experience daily hands on application of development fundamentals and principles through group and individual projects reflecting real world business problems.</p>
          </section>
        );
    }
}
