// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  NewSource,
} from './';

export default {
  path: 'admin-sources',
  name: 'Admin sources',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: '/admin/sources/new', name: 'New source', component: NewSource },
  ],
};
