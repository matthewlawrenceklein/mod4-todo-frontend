import React, { Component } from 'react';
import GreenCard from './containers/GreenCard'
import YellowCard from './containers/YellowCard'
import RedCard from './containers/RedCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'


class TodoContainer extends Component {

    
 
    render() {
        return (
            <div className=''>
                <Container fluid>
                    <Row>
                        <Col>
                            < GreenCard 
                                greenCards={this.props.todos.filter(todo => todo.color === 'green' && todo.completed !== true )} 
                                handleComplete={ this.props.handleComplete }
                                handleEdit={ this.props.handleEdit }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            < YellowCard 
                                yellowCards={this.props.todos.filter(todo => todo.color === 'yellow' && todo.completed !== true )} 
                                handleComplete={ this.props.handleComplete }
                                handleEdit={ this.props.handleEdit }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            < RedCard 
                                redCards={this.props.todos.filter(todo => todo.color === 'red' && todo.completed !== true )} 
                                handleComplete={ this.props.handleComplete }
                                handleEdit={ this.props.handleEdit }
                            />
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      todos: state.todos,
    }
}

export default connect(mapStateToProps, null)(TodoContainer)
