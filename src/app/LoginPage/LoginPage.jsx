import React  from 'react';
import { API } from 'Utils/constants';

import './LoginPage.scss';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-page__container">
        <h1 className="login-page__title">Welcome to Gitter!</h1>
        <a className="login-page__link" href={API.LOGIN}>
          Login
        </a>
      </div>
    </div>
  );
}

export default LoginPage;