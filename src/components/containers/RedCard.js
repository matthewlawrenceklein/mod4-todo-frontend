import React, { Component } from 'react';
import '../../App.css';
import ToDoCard from '../ToDoCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'


class RedCard extends Component {

    renderRed = () => {
        return this.props.redCards.map(card => {
            return <ToDoCard 
                cardData={card} 
                title={'immediately'}
                handleComplete={ this.props.handleComplete }
                handleEdit={ this.props.handleEdit }
            />
        })
    }


    render() {
        return (
            <div className="red">
              <Container>
                    <Row>
                        { this.renderRed() }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default RedCard;
