// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  ADMIN_SOURCES_LANG,
} from './constants';

import lang  from '../../../lang.js';

export function switchLang(lang) {
  return {
    type: ADMIN_SOURCES_LANG,
    lang
  };
}


export function reducer(state, action) {
  switch (action.type) {
    case ADMIN_SOURCES_LANG:
      let newLang = lang[action.lang].adminSource;

      return Object.assign({}, state, {
        lang: {
          ...newLang,
          current: action.lang,
        },
      })
    

    default:
      return state;
  }
}
