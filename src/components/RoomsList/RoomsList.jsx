import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom'

import './RoomsList.scss';

class RoomsList extends Component {
  static propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      avatarUrl: PropTypes.string
    })),
    status: PropTypes.string,
    fetchRooms: PropTypes.func
  };

  static defaultProps = {
    rooms: {},
    fetchRooms: () => {}
  };

  componentWillMount() {
    this.props.fetchRooms();
  }
  render() {
    const { status, rooms} = this.props;
    const isLoading = status === 'load';

    const cn = cx('rooms-list', {
      'loading': isLoading
    });

    return (
      <ul className={cn}>
        {
          isLoading && <li className="rooms-list__item rooms-list__item_loader">Loading...</li>
        }
        {rooms.map(({ id, name, avatarUrl }) => (
          <li className="rooms-list__item" key={id}>
            <Link to={`/${id}`} className="rooms-list__link">
              <img src={avatarUrl} alt={name} className="rooms-list__pic"/>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default RoomsList;