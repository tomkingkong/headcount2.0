import React, { Component } from 'react';

import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  render() {
    return (
      <form 
        className="Form" 
        onSubmit={(e) => {
          e.preventDefault();
          
        }}
      >
        <input 
          type="text" 
          placeholder="Select a school"
          onChange={() => {
            this.handleChange;
            this.props.updateDistrict(this.state.input);
          }}
          value={this.state.input}
        />
      </form>
    );
  }
}

export default Form;