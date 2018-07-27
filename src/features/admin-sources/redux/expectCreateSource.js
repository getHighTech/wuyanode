// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_SOURCES_EXPECT_CREATE_SOURCE,
} from './constants';

export function expectCreateSource(sourceParams) {
  return {
    sourceParams,
    type: ADMIN_SOURCES_EXPECT_CREATE_SOURCE,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case ADMIN_SOURCES_EXPECT_CREATE_SOURCE:
      return {
        ...state,
      };

    default:
      return state;
  }
}
