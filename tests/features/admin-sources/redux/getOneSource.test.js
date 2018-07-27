import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  ADMIN_SOURCES_GET_ONE_SOURCE_BEGIN,
  ADMIN_SOURCES_GET_ONE_SOURCE_SUCCESS,
  ADMIN_SOURCES_GET_ONE_SOURCE_FAILURE,
  ADMIN_SOURCES_GET_ONE_SOURCE_DISMISS_ERROR,
} from '../../../../src/features/admin-sources/redux/constants';

import {
  getOneSource,
  dismissGetOneSourceError,
  reducer,
} from '../../../../src/features/admin-sources/redux/getOneSource';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('admin-sources/redux/getOneSource', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getOneSource succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getOneSource())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', ADMIN_SOURCES_GET_ONE_SOURCE_BEGIN);
        expect(actions[1]).toHaveProperty('type', ADMIN_SOURCES_GET_ONE_SOURCE_SUCCESS);
      });
  });

  it('dispatches failure action when getOneSource fails', () => {
    const store = mockStore({});

    return store.dispatch(getOneSource({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', ADMIN_SOURCES_GET_ONE_SOURCE_BEGIN);
        expect(actions[1]).toHaveProperty('type', ADMIN_SOURCES_GET_ONE_SOURCE_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissGetOneSourceError', () => {
    const expectedAction = {
      type: ADMIN_SOURCES_GET_ONE_SOURCE_DISMISS_ERROR,
    };
    expect(dismissGetOneSourceError()).toEqual(expectedAction);
  });

  it('handles action type ADMIN_SOURCES_GET_ONE_SOURCE_BEGIN correctly', () => {
    const prevState = { getOneSourcePending: false };
    const state = reducer(
      prevState,
      { type: ADMIN_SOURCES_GET_ONE_SOURCE_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getOneSourcePending).toBe(true);
  });

  it('handles action type ADMIN_SOURCES_GET_ONE_SOURCE_SUCCESS correctly', () => {
    const prevState = { getOneSourcePending: true };
    const state = reducer(
      prevState,
      { type: ADMIN_SOURCES_GET_ONE_SOURCE_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getOneSourcePending).toBe(false);
  });

  it('handles action type ADMIN_SOURCES_GET_ONE_SOURCE_FAILURE correctly', () => {
    const prevState = { getOneSourcePending: true };
    const state = reducer(
      prevState,
      { type: ADMIN_SOURCES_GET_ONE_SOURCE_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getOneSourcePending).toBe(false);
    expect(state.getOneSourceError).toEqual(expect.anything());
  });

  it('handles action type ADMIN_SOURCES_GET_ONE_SOURCE_DISMISS_ERROR correctly', () => {
    const prevState = { getOneSourceError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: ADMIN_SOURCES_GET_ONE_SOURCE_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getOneSourceError).toBe(null);
  });
});

