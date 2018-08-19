import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ input: value }, () => this.props.updateDistrict(value));
  }

  handleSubmit = (event) => {
    const { value } = event.target;
    event.preventDefault();
    this.setState({ input: '' }, () => this.props.updateDistrict(value));
  }

  render() {
    const { input } = this.state;
    return (
      <form className="Form" 
        onSubmit={this.handleSubmit}
      >
        <input type="text" 
          placeholder="Select a school"
          value={input}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

Form.propTypes = {
  updateDistrict: PropTypes.func
};

export default Form;