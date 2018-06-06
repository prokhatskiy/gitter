import React from 'react';
import { Redirect } from 'react-router';

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

            </aside>
            <main className="dashboard__main">

            </main>
        </section>
    )
}

export default MainPage;