import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ChatForm from './ChatForm';

import './Chat.scss';


class Chat extends Component {
  constructor(props) {
    super(props);

    this.postMessage = function (text) {
      props.postMessage(props.roomId, text);
    };

    this.lastNode = React.createRef();
  }
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({

    })),
    status: PropTypes.string,
    fetchMessages: PropTypes.func,
    postMessage: PropTypes.func,
    roomId: PropTypes.string
  };

  static defaultProps = {
    messages: [],
    fetchMessages: () => {},
    postMessage: () => {}
  };

  componentWillMount() {
    const { fetchMessages, roomId} = this.props;

    if (roomId) {
      fetchMessages(roomId);
    }
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.lastNode.current && this.lastNode.current.scrollIntoView();
  }

  render() {
    const { status , roomId, messages, postMessage } = this.props;
    const isLoading = status === 'load';

    const cn = cx('chat', {
      chat_loading: isLoading,
      chat_empty: !roomId
    });

    if (!roomId || isLoading) {
      return (
        <div className={cn}>
          {!roomId && <div className="chat__message">Please, select a room!</div>}
          {isLoading && <div className="chat__message">Loading...</div>}
        </div>
      )
    }

    return (
      <div className={cn}>
        <ul className="chat__view">
          {
            messages.map(({id, html, sent, fromUser: {displayName}}) => (
              <li className="chat__message" key={id}>
                <header className="chat__message-head">
                  {displayName}
                </header>
                <div className="chat__body" dangerouslySetInnerHTML={{__html: html}}/>
              </li>
            ))
          }
          <li ref={this.lastNode} />
        </ul>

        <ChatForm postMessage={this.postMessage} />
      </div>
    );
  }
}

export default Chat;