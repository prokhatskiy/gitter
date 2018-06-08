import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class RoomsList extends Component {
  componentWillMount() {
    this.props.fetchRooms();
  }
  render() {
    return (
      <ul className="rooms-list">
        {this.props.rooms.map(({ id, name, avatarUrl, status }) => {
          const cn = cx('rooms-list', {
            'loading': status === 'load'
          });

          return (
            <li className={cn} key={id}>
              <a href={`/${id}`} className="rooms-list__link">
                <img src={avatarUrl} alt={name} className="rooms-list__pic"/>
                {name}
              </a>
            </li>
          )
        })}
      </ul>
    );
  }
}

RoomsList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  })),
  fetchRooms: PropTypes.func
};

export default RoomsList;