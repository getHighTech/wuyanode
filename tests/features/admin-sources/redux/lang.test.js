import {
  ADMIN_SOURCES_LANG,
} from '../../../../src/features/admin-sources/redux/constants';

import {
  lang,
  reducer,
} from '../../../../src/features/admin-sources/redux/lang';

describe('admin-sources/redux/lang', () => {
  it('returns correct action by lang', () => {
    expect(lang()).toHaveProperty('type', ADMIN_SOURCES_LANG);
  });

  it('handles action type ADMIN_SOURCES_LANG correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ADMIN_SOURCES_LANG }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
