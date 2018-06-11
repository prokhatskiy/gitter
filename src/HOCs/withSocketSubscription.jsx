import React, { Component } from 'react';
import PropTypes from 'prop-types';

import io from 'socket.io-client';

export const ACTION = {
  CONNECT: 'connect',
  SUBSCRIBE: 'subscribe',
  UNSUBSCRIBE: 'unsubscirbe',
  MESSAGE: 'message'
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withSocketSubscription(WrappedComponent) {
  class WithSocketSubscription extends Component {
    constructor(props) {
      super(props);

      this.socket = io();

      this.socket.on(ACTION.CONNECT, () => {
        if (props.roomId) {
          this.subscribe(props.roomId);
        }
      });
    }

    static propTypes = {
      fetchMessages: PropTypes.func,
      appendMessage: PropTypes.func,
      roomId: PropTypes.string
    };

    static defaultProps = {
      fetchMessages: () => {},
      appendMessage: () => {}
    };

    componentWillMount() {
      const { fetchMessages, roomId } = this.props;

      if (roomId) {
        fetchMessages(roomId);
      }
    }

    componentWillReceiveProps(nextProps) {
      const { fetchMessages, roomId } = this.props;

      if (nextProps.roomId !== roomId) {
        fetchMessages(nextProps.roomId);

        this.unsubscribe(roomId);
        this.subscribe(nextProps.roomId);
      }
    }

    componentWillUnmount() {
      const { roomId } = this.props;

      if (roomId) {
        this.unsubscribe(roomId);
        this.socket.close();
      }
    }

    subscribe(roomId) {
      this.socket.emit(ACTION.SUBSCRIBE, { roomId });

      this.socket.on(`${ACTION.MESSAGE}:${roomId}`,
        data => { console.log(data); return this.props.appendMessage(JSON.parse(data)); }
      );
    }

    unsubscribe(roomId) {
      this.socket.emit(ACTION.UNSUBSCRIBE, { roomId });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithSocketSubscription.displayName = `WithSocketSubscription(${getDisplayName(WrappedComponent)})`;

  return WithSocketSubscription;
}

export default withSocketSubscription;