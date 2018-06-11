import React from 'react';
import { shallow } from 'enzyme';

import UserInfo from '../UserInfo';
import { API } from 'Utils/constants';

describe('<UserInfo /> component', () => {
  it('should be rendered without props', () => {
    const wrapper = shallow(<UserInfo />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render loader and have appropriate className', () => {
    const user = {
      status: 'load'
    };

    const wrapper = shallow(<UserInfo user={user} />);

    expect(wrapper.contains(<span className="loader">Loading...</span>)).toEqual(true);
    expect(wrapper.hasClass('loading')).toEqual(true);
  });

  it('should fetch user info when mounted', () => {
    const fetchUserMock = jest.fn();

    shallow(<UserInfo fetchUser={fetchUserMock} />);

    expect(fetchUserMock).toHaveBeenCalledTimes(1);
  });

  it('should contain logout link', () => {
    const user = {
      status: 'fetched',
      displayName: 'Artem'
    };

    const wrapper = shallow(<UserInfo user={user} />);

    expect(wrapper.find('a').prop('href')).toEqual(API.LOGOUT);
  });

  it('should render image if avatar url is presented', () => {
    const user = {
      status: 'fetched',
      displayName: 'Artem'
    };

    let wrapper = shallow(<UserInfo user={user} />);

    expect(wrapper.find('img').exists()).toEqual(false);

    const userWithPic = {
      ...user,
      avatarUrlMedium: 'test'
    };

    wrapper = shallow(<UserInfo user={userWithPic} />);

    const img = wrapper.find('img');

    expect(img.exists()).toEqual(true);
    expect(img.prop('src')).toEqual(userWithPic.avatarUrlMedium);
  });
});