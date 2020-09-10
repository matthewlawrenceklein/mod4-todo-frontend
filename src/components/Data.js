import React from 'react';
import { connect } from 'react-redux'
import {Doughnut} from 'react-chartjs-2';

class Data extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            labels: ['Early', 'Timely', 'Dangerly'],
            datasets: [
                {
                label: 'Your Productivity',
                fill: false,
                lineTension: 0.5,
                backgroundColor: ['#7FFFD4', '#FFEC8B', '	#FFB6C1' ] ,
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [
                    this.props.todos.filter(todo => todo.color === 'green' && todo.completed === true).length,
                    this.props.todos.filter(todo => todo.color === 'yellow' && todo.completed === true).length, 
                    this.props.todos.filter(todo => todo.color === 'red' && todo.completed === true).length]
                }
            ]
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.todos.length !== this.props.todos.length){
            this.setState({
                datasets: [{
                    label: 'Your Productivity',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: ['#7FFFD4', '#FFEC8B', '#FFB6C5' ] ,
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [
                        this.props.todos.filter(todo => todo.color === 'green' && todo.completed === true).length,
                        this.props.todos.filter(todo => todo.color === 'yellow' && todo.completed === true).length, 
                        this.props.todos.filter(todo => todo.color === 'red' && todo.completed === true).length]
                    }]
            })
        }
    }

    

  render() {
    console.log(this.props.todos)
    return (
      <div>
        <Doughnut
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Your Productivity',
              fontSize:20
            }
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      todos: state.todos,
    }
}

export default connect(mapStateToProps, null)(Data)
