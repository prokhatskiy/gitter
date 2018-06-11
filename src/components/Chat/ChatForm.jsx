import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ChatForm.scss';

class ChatForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: ''
    }
  }

  static propTypes = {
    postMessage: PropTypes.func
  };

  static defaultProps = {
    postMessage: () => {}
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      val: ''
    });

    this.props.postMessage(this.state.val);

    this.setState({
      val: ''
    });
  };

  handleInputChange = e => {
    this.setState({
      val: e.target.value
    })
  };

  render() {
    return (
      <div className="chat-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="chat-form__input"
            value={this.state.val}
            onChange={this.handleInputChange}
            required
          />
          <button className="chat-form__btn" type="submit">Send Message</button>
        </form>
      </div>
    )
  }
}

export default ChatForm;