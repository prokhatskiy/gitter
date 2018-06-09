import { connect } from 'react-redux';
import { fetchMessages } from 'Redux/actions';
import { getMessages } from 'Redux/selectors';

import Chat from './Chat';

export const mapDispatchToProps = {
  fetchMessages
};

export default connect(getMessages, mapDispatchToProps)(Chat);