import { connect } from 'react-redux';
import { fetchMessages, postMessage } from 'Redux/actions';
import { getMessages } from 'Redux/selectors';

import Chat from './Chat';

export const mapDispatchToProps = {
  fetchMessages,
  postMessage
};

export default connect(getMessages, mapDispatchToProps)(Chat);