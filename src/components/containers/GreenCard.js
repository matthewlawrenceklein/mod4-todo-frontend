import React, { Component } from 'react';
import '../../App.css';
import ToDoCard from '../ToDoCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'


class GreenCard extends Component {


    renderGreen = () => {
        return this.props.greenCards.map(card => {
            return <ToDoCard 
                cardData={card} 
                title={'Eventually'}
                handleComplete={ this.props.handleComplete }  
            />
        })
    }
 
    render() {

        return (
            <div className='green'>
                <Container>
                    <Row>
                            { this.renderGreen() }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GreenCard;
