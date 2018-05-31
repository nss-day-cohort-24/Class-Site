import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class About extends React.Component {
    render() {
        let textContent = this.props.text;

        return(
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>{textContent}</Col>
        </Row>
        );
    }
}
