import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getAuthStatus } from 'Redux/selectors';

export default connect(getAuthStatus)(Dashboard);