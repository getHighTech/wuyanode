// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  New,
} from './';

export default {
  path: 'admin-blogs',
  name: 'Admin blogs',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: '/admin/blogs/new', name: 'New', component: New },
  ],
};
