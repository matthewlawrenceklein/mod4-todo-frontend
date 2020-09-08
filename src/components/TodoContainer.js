import React, { Component } from 'react';
import GreenCard from './containers/GreenCard'
import YellowCard from './containers/YellowCard'
import RedCard from './containers/RedCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class TodoContainer extends Component {

    
 
    render() {
        return (
            <div className=''>
                <Container fluid>
                    <Row>
                        <Col>
                            < GreenCard 
                                greenCards={this.props.greenCards} 
                                handleComplete={ this.props.handleComplete }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            < YellowCard 
                                yellowCards={this.props.yellowCards} 
                                handleComplete={ this.props.handleComplete }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            < RedCard 
                                redCards={this.props.redCards} 
                                handleComplete={ this.props.handleComplete }
                            />
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default TodoContainer;
