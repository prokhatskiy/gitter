import { connect } from 'react-redux';
import { compose } from 'recompose';

import { fetchMessages, postMessage, appendMessage } from 'Redux/actions';
import { getMessages } from 'Redux/selectors';

import withSocketSubscription from 'HOCs/withSocketSubscription';

import Chat from './Chat';

export const mapDispatchToProps = {
  fetchMessages,
  postMessage,
  appendMessage
};

export default compose(
  connect(getMessages, mapDispatchToProps),
  withSocketSubscription
)(Chat);