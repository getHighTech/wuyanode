import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/media/DefaultPage';

describe('media/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      media: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.media-default-page').length
    ).toBe(1);
  });
});
