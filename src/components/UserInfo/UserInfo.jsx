import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './UserInfo.scss';

import { API } from 'Utils/constants';

class UserInfo extends Component {
  static propTypes = {
    user: PropTypes.shape({
      avatarUrlMedium: PropTypes.string,
      displayName: PropTypes.string
    }),
    fetchUser: PropTypes.func
  };

  static defaultProps = {
    user: {},
    fetchUser: () => {}
  };

  componentWillMount() {
    this.props.fetchUser();
  }
  render() {
    const { user: { avatarUrlMedium, displayName, status } } = this.props;
    const isLoading = status === 'load';

    const cn = cx('user-info', {
      loading: isLoading
    });

    return (
      <div className={cn}>
        { isLoading && <span className="loader">Loading...</span>}
        {
          avatarUrlMedium &&
          <img src={avatarUrlMedium} alt={displayName} className="user-info__pic" />
        }
        <h1 className="user-info__name">
          {displayName}
        </h1>
        <a href={API.LOGOUT} className="user-info__logout">Logout</a>
      </div>
    );
  }
}

export default UserInfo;