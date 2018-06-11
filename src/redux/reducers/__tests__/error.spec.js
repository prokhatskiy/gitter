import reducer from '../error';
import { ERROR } from '../../types';

describe('Error reducer', () => {
  it('should save new error to state', () => {
    const errorObj = {
      status: 500,
      text: 'My Error'
    };

    const state = reducer({}, {
      type: ERROR,
      error: {
        response: errorObj
      }
    });

    expect(state).toEqual(errorObj);
  });


  it('should set logout flag if error has 401 status', () => {
    const errorObj = {
      status: 401,
      text: 'My Error'
    };

    const state = reducer({}, {
      type: ERROR,
      error: {
        response: errorObj
      }
    });

    expect(state).toEqual({ isLoggedIn: false });
  });
});