import reducer from '../user';
import { USER } from '../../types';

describe('User reducer', () => {
  it('should set load status during loading', () => {
    const state = reducer({}, {
      type: USER.LOAD
    });

    expect(state).toEqual({
      status: 'load'
    });
  });


  it('should save user data to state', () => {
    const initialState = {
      status: 'load'
    };

    const userData = {
      name: 'Artem'
    };

    const state = reducer(initialState, {
      type: USER.FETCHED,
      payload: {
        data: [userData]
      }
    });

    expect(state).toEqual({ ...userData, status: 'fetched' });
  });
});