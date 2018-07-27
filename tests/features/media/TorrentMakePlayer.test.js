import React from 'react';
import { shallow } from 'enzyme';
import { TorrentMakePlayer } from '../../../src/features/media/TorrentMakePlayer';

describe('media/TorrentMakePlayer', () => {
  it('renders node with correct class name', () => {
    const props = {
      media: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <TorrentMakePlayer {...props} />
    );

    expect(
      renderedComponent.find('.media-torrent-make-player').length
    ).toBe(1);
  });
});
