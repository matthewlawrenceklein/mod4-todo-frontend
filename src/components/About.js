import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';


class About extends Component {
    render() {
        return (
            <Container fluid>

                <div>  
                    <div className='green'>
                        <h2 className="help-text" >taskbot jr is a productivity app </h2>
                    </div>

                    <div className='yellow'>
                        <h2 className="help-text"> create todos and set their urgency by color </h2>
                        <h2 className="help-text"> try to complete todos in the green + yellow zones </h2>
                    </div>

                    <div className='red'>
                        <h2 className="help-text">  review your productivity data and draw conclusions </h2>
                        <h2 className="help-text">  don't stress out dude, life's a journey </h2>
                    </div>  
                </div>

            </Container>
        );
    }
}

export default About;
