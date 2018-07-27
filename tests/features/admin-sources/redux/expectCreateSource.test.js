import {
  ADMIN_SOURCES_EXPECT_CREATE_SOURCE,
} from '../../../../src/features/admin-sources/redux/constants';

import {
  expectCreateSource,
  reducer,
} from '../../../../src/features/admin-sources/redux/expectCreateSource';

describe('admin-sources/redux/expectCreateSource', () => {
  it('returns correct action by expectCreateSource', () => {
    expect(expectCreateSource()).toHaveProperty('type', ADMIN_SOURCES_EXPECT_CREATE_SOURCE);
  });

  it('handles action type ADMIN_SOURCES_EXPECT_CREATE_SOURCE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_SOURCES_EXPECT_CREATE_SOURCE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
