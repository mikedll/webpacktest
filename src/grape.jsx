
import React from 'react';

export default class GrapeContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {message: "Hello from Grape!"}
    
    this.onEnhance = this.onEnhance.bind(this)
  }
  
  onEnhance() {
    this.setState((state) => {message: state.message + "!"})
  }
  
  render() {
    return (
      <div className="grape-container">
        
        Hello. This should be a grape.
    
        <div className="primary">
          { this.state.message }
        </div>
        <button onClick={this.onEnhance}>Enhance</button>
      </div>
    )    
  }
}
