import { connect } from 'react-redux';
import { fetchRooms } from 'Redux/actions';
import { getRooms } from 'Redux/selectors';

import RoomsList from './RoomsList';

export const mapDispatchToProps = {
  fetchRooms
};

export default connect(getRooms, mapDispatchToProps)(RoomsList);