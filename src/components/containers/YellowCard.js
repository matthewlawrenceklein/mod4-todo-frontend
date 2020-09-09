import React, { Component } from 'react';
import '../../App.css';
import ToDoCard from '../ToDoCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

class YellowCard extends Component {

    renderYellow = () => {
        return this.props.yellowCards.map(card => {
            return <ToDoCard 
                cardData={card} 
                title={'Soon'}
                handleComplete={ this.props.handleComplete }  
                handleEdit={ this.props.handleEdit }  
            />
        })
    }

    render() {
        return (
            <div className='yellow'>
              <Container>
                    <Row>
                        { this.renderYellow() }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default YellowCard;
