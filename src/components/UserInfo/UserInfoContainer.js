import { connect } from 'react-redux';
import { fetchUser } from 'Redux/actions';
import { getUser } from 'Redux/selectors';

import UserInfo from './UserInfo';

export const mapDispatchToProps = {
  fetchUser
};

export default connect(getUser, mapDispatchToProps)(UserInfo);