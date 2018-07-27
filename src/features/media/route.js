// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  DefaultPage,
  TorrentMakePlayer,
} from './';

export default {
  path: 'media',
  name: 'Media',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: '/media/torrent/make/player', name: 'Torrent make player', component: TorrentMakePlayer },
  ],
};
