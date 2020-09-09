import React from 'react';
import { connect } from 'react-redux'
import {Doughnut} from 'react-chartjs-2';

class Data extends React.Component {

    state = {
        labels: ['Green', 'Yellow', 'Red'],
        datasets: [
            {
            label: 'Your Productivity',
            fill: false,
            lineTension: 0.5,
            backgroundColor: ['#7FFFD4', '#FFEC8B', '	#FFB6C1' ] ,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [
                50,
                100, 
                150]
            }
        ]
    }
    

  render() {
      console.log(this.props.todos.length)
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
