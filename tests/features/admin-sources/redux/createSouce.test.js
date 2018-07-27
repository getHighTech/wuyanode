import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  ADMIN_SOURCES_CREATE_SOUCE_BEGIN,
  ADMIN_SOURCES_CREATE_SOUCE_SUCCESS,
  ADMIN_SOURCES_CREATE_SOUCE_FAILURE,
  ADMIN_SOURCES_CREATE_SOUCE_DISMISS_ERROR,
} from '../../../../src/features/admin-sources/redux/constants';

import {
  createSouce,
  dismissCreateSouceError,
  reducer,
} from '../../../../src/features/admin-sources/redux/createSouce';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('admin-sources/redux/createSouce', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when createSouce succeeds', () => {
    const store = mockStore({});

    return store.dispatch(createSouce())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', ADMIN_SOURCES_CREATE_SOUCE_BEGIN);
        expect(actions[1]).toHaveProperty('type', ADMIN_SOURCES_CREATE_SOUCE_SUCCESS);
      });
  });

  it('dispatches failure action when createSouce fails', () => {
    const store = mockStore({});

    return store.dispatch(createSouce({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', ADMIN_SOURCES_CREATE_SOUCE_BEGIN);
        expect(actions[1]).toHaveProperty('type', ADMIN_SOURCES_CREATE_SOUCE_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissCreateSouceError', () => {
    const expectedAction = {
      type: ADMIN_SOURCES_CREATE_SOUCE_DISMISS_ERROR,
    };
    expect(dismissCreateSouceError()).toEqual(expectedAction);
  });

  it('handles action type ADMIN_SOURCES_CREATE_SOUCE_BEGIN correctly', () => {
    const prevState = { createSoucePending: false };
    const state = reducer(
      prevState,
      { type: ADMIN_SOURCES_CREATE_SOUCE_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.createSoucePending).toBe(true);
  });

  it('handles action type ADMIN_SOURCES_CREATE_SOUCE_SUCCESS correctly', () => {
    const prevState = { createSoucePending: true };
    const state = reducer(
      prevState,
      { type: ADMIN_SOURCES_CREATE_SOUCE_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.createSoucePending).toBe(false);
  });

  it('handles action type ADMIN_SOURCES_CREATE_SOUCE_FAILURE correctly', () => {
    const prevState = { createSoucePending: true };
    const state = reducer(
      prevState,
      { type: ADMIN_SOURCES_CREATE_SOUCE_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.createSoucePending).toBe(false);
    expect(state.createSouceError).toEqual(expect.anything());
  });

  it('handles action type ADMIN_SOURCES_CREATE_SOUCE_DISMISS_ERROR correctly', () => {
    const prevState = { createSouceError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: ADMIN_SOURCES_CREATE_SOUCE_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.createSouceError).toBe(null);
  });
});

