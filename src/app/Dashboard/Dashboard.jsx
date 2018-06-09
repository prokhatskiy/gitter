import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import UserInfo from 'Components/UserInfo';
import RoomsList from 'Components/RoomsList';
import Chat from 'Components/Chat';

import './Dashboard.scss';

import { ROUTES } from '../../utils/constants';

function Dashboard({
  isLoggedIn,
  match: { params }
}) {
    if (!isLoggedIn) {
        return <Redirect to={ROUTES.LOGIN}/>
    }

    return (
        <section className="dashboard">
            <aside className="dashboard__aside">
              <UserInfo />
              <RoomsList />
            </aside>
            <main className="dashboard__main">
              <Chat roomId={params.roomId} key={params.roomId} />
            </main>
        </section>
    )
}

Dashboard.propTypes = {
  isLoggedIn: PropTypes.bool,
  roomId: PropTypes.string
};

export default Dashboard;