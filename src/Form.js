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
          onChange={(e) => {
            this.handleChange(e);
            this.props.updateDistrict(this.state.input);
          }}
          value={this.state.input}
        />
      </form>
    );
  }
}

Form.propTypes = {
  updateDistrict: PropTypes.func
};

export default Form;