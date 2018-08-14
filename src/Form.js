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
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form className="Form">
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