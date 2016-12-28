import React, { Component } from 'react';
import Todos from './Todos'
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      load: false,
    }
  }

  componentDidMount() {
    this.setState({
      load: true,
    })
  }

  render() {

    if(this.state.load){
      return (
        <div className="App">
          <ReactCSSTransitionGroup
          transitionName="cardIn"
          transitionAppear={true} transitionAppearTimeout={500}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={300}>
            <Todos/>
          </ReactCSSTransitionGroup>
        </div>
      )
    }else{
      return <h1>Loading</h1>
    }
        
  }
}

export default App;
