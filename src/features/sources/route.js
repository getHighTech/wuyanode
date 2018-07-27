// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  Show,
  MoviePlay,
} from './';

export default {
  path: 'sources',
  name: 'Sources',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: '/sources/:id/show', name: 'Show', component: Show },
    { path: '/sources/:id/show/play', name: 'Movie play', component: MoviePlay },
  ],
};
