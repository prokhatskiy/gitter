import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import UserInfo from 'Components/UserInfo';
import RoomsList from 'Components/RoomsList';

import './Dashboard.scss';

import { ROUTES } from '../../utils/constants';

function MainPage({
    isLoggedIn
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
              Dashboard
            </main>
        </section>
    )
}

MainPage.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default MainPage;