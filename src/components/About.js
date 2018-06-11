import React from 'react';
import './About.css';

export default class About extends React.Component {
    render() {

        return(
          <section id="About" className="section__about">
                <p className="col descAbout text-left justify-content-center">Nashville Software School's Cohort 24 Front-End Developer &#38; UX Designer apprentices have been in a full-time six-month immersive software development bootcamp focusing on Front-End development and UI/UX fundamentals. Apprentices experience daily hands on application of development fundamentals and principles through group and individual projects reflecting real world business problems.</p>
          
                <button className="button " type="button"><a href="https://www.eventbrite.com/e/demo-day-front-end-web-designdeveloper-full-stack-cnet-developer-tickets-46409907282?utm_campaign=Demo%20Day%20C24%20%26%20E6&utm_medium=website&utm_source=c24-site" target="blank">RSVP to Demo Day</a></button>
          </section>
        );
    }
}
