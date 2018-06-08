import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { API } from 'Utils/constants';

class UserInfo extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }
  render() {
    const { user: { avatarUrlMedium, displayName, status } } = this.props;
    const cn = cx('user-info', {
      loading: status === 'load'
    });

    return (
      <div className={cn}>
        <img src={avatarUrlMedium} alt={displayName} className="user-info__pic" />
        <h1 className="user-info__name">
          {displayName}
        </h1>
        <a href={API.LOGOUT} className="user-info__logout">Logout</a>
      </div>
    );
  }
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    avatarUrlMedium: PropTypes.string,
    displayName: PropTypes.string
  }),
  fetchUser: PropTypes.func
};

export default UserInfo;